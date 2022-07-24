const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId
const asyncLocalStorage = require('../../services/als.service')

async function query() {
  try {
    logger.debug('Getting cmps')
    const collection = await dbService.getCollection('cmp_db')
    console.log('collection:',collection);
    var cmps = await collection.find()
    console.log('cmpsssss', cmps);
    return cmps
  } catch (err) {
    logger.error('cannot find cmps', err)
    throw err
  }
}

module.exports = {
  query,
}
