const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

async function query(options) {
  try {
    const sortBy = JSON.parse(options.sortBy)
    const filterBy = JSON.parse(options.filterBy)
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

module.exports = {
  remove,
  query,
  getById,
  add,
  update,
}

function _buildCriteria(filterBy = { txt: '', labels: null, status: '' }) {
  const { labels, txt, status } = filterBy

  const criteria = {}

  if (txt) {
    criteria.name = { $regex: txt, $options: 'i' }
  }

  if (labels && labels.length > 0) {
    const labelsCrit = labels.map(label => ({
      labels: { $elemMatch: { title: label } },
    }))

    criteria.$and = labelsCrit
  }

  if (status) {
    criteria.inStock = status === 'stock' ? true : false
  }

  return criteria
}
