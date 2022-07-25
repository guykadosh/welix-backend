const wapService = require('./wap.service.js')
const logger = require('../../services/logger.service')

// GET LIST
async function getWaps(req, res) {
  try {
    logger.debug('Getting Waps')
    var queryParams = req.query
    const waps = await wapService.query(queryParams)
    res.json(waps)
  } catch (err) {
    logger.error('Failed to get waps', err)
    res.status(500).send({ err: 'Failed to get waps' })
  }
}

// GET BY ID
async function getWapById(req, res) {
  try {
    const wapId = req.params.id
    console.log(wapId)
    const wap = await wapService.getById(wapId)
    res.json(wap)
  } catch (err) {
    logger.error('Failed to get wap', err)
    res.status(500).send({ err: 'Failed to get wap' })
  }
}

// POST (add wap)
async function addWap(req, res) {
  try {
    const wap = req.body
    const addedWap = await wapService.add(wap)
    res.json(addedWap)
  } catch (err) {
    logger.error('Failed to add wap', err)
    res.status(500).send({ err: 'Failed to add wap' })
  }
}

// PUT (Update wap)
async function updateWap(req, res) {
  try {
    const wap = req.body
    const updatedWap = await wapService.update(wap)
    res.json(updatedWap)
  } catch (err) {
    logger.error('Failed to update wap', err)
    res.status(500).send({ err: 'Failed to update wap' })
  }
}

// DELETE (Remove wap)
async function removeWap(req, res) {
  try {
    const wapId = req.params.id
    await wapService.remove(wapId)
    res.send('Removed')
  } catch (err) {
    logger.error('Failed to remove wap', err)
    res.status(500).send({ err: 'Failed to remove wap' })
  }
}

// Update cmp inside wap
async function updateCmp(req, res) {
  try {
    let { cmp, wapId } = req.body
    // console.log(req.body)
    // cmp = JSON.parse(cmp)
    // console.log(cmp, wapId)
    const updatedCmp = await wapService.updateCmp(wapId, cmp)
    res.json(updatedCmp)
  } catch (err) {
    logger.error('Failed to update cmp', err)
    res.status(500).send({ err: 'Failed to update cmp' })
  }
}

// Remove cmp inside wap
async function removeCmp(req, res) {
  try {
    const wapId = req.params.id
    const { cmpId } = req.body
    await wapService.removeCmp(wapId, cmpId)
  } catch (err) {
    logger.error('Failed to remove cmp', err)
    res.status(500).send({ err: 'Failed to remove cmp' })
  }
}
module.exports = {
  getWaps,
  getWapById,
  addWap,
  updateWap,
  removeWap,
  updateCmp,
  removeCmp,
}
