const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

async function query(options) {
  try {
    const criteria = _buildCriteria(filterBy)

    const collection = await dbService.getCollection('wap')
    var waps = await collection.find(criteria).sort(sortBy).toArray()
    return waps
  } catch (err) {
    logger.error('cannot find waps', err)
    throw err
  }
}

async function getById(wapId) {
  try {
    const collection = await dbService.getCollection('wap')
    const wap = collection.findOne({ _id: ObjectId(wapId) })
    return wap
  } catch (err) {
    logger.error(`while finding wap ${wapId}`, err)
    throw err
  }
}

async function remove(wapId) {
  try {
    const collection = await dbService.getCollection('wap')
    await collection.deleteOne({ _id: ObjectId(wapId) })
    return wapId
  } catch (err) {
    logger.error(`cannot remove wap ${wapId}`, err)
    throw err
  }
}

async function add(wap) {
  try {
    const collection = await dbService.getCollection('wap')
    const { insertedId } = await collection.insertOne(wap)
    wap._id = insertedId
    return wap
  } catch (err) {
    logger.error('cannot insert wap', err)
    throw err
  }
}

async function update(wap) {
  try {
    var id = ObjectId(wap._id)
    delete wap._id
    const collection = await dbService.getCollection('wap')
    await collection.updateOne({ _id: id }, { $set: { ...wap } })
    wap._id = id
    return wap
  } catch (err) {
    logger.error(`cannot update wap ${wap._id}`, err)
    throw err
  }
}

async function updateCmp(wapId, cmp) {
  const collection = await dbService.getCollection('wap')
  const wap = collection.findOne({ _id: ObjectId(wapId) })

  let idx = wap.cmps.findIndex(cmp => cmp.id === cmp.id)

  // -1 means the cmp lives inside a wap container
  if (idx === -1) {
    // wap-nav is inside header if not stand alone
    if (cmp.type === 'wap-nav') {
      const wapHeader = wap.cmps.find(currCmp => currCmp.type === 'wap-header')
      wapHeader.info.nav = cmp
    } else {
      // find the the container
      const wapContainer = wap.cmps
        .filter(currCmp => currCmp.type === 'wap-container')
        .find(currCmp =>
          currCmp.info.cmps.some(currCmp => currCmp.id === cmp.id)
        )

      // find the cmp idx
      const innerIdx = wapContainer.info.cmps.findIndex(
        cmp => cmp.id === cmp.id
      )

      // const copy = JSON.parse(JSON.stringify(wapContainer))
      // idx = cmps.findIndex(cmp => cmp.id === wapContainer.id)

      wapContainer.info.cmps.splice(innerIdx, 1, cmp)
      wap.cmps.splice(idx, 1, wapContainer)
    }
  } else {
    wap.cmps.splice(idx, 1, cmp)
  }
}

module.exports = {
  remove,
  query,
  getById,
  add,
  update,
}

function _buildCriteria(
  filterBy = { isPublic: undefined, userId: '', isTemplate: undefined }
) {
  const { isPublic, userId, isTemplate } = filterBy

  const criteria = {}

  if (isPublic !== null) {
    criteria.isPublic = true
  }

  if (isTemplate !== null) {
    criteria.isPublic = true
  }

  if (userId) {
    criteria.createdBy = { $elemMatch: { _id: userId } }
  }

  return criteria
}
