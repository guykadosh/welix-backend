const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId
const asyncLocalStorage = require('../../services/als.service')

async function query(filterBy = {}) {
  try {
    logger.debug('Getting reviews')
    const criteria = _buildCriteria(filterBy)
    console.log(criteria)
    console.log('criteria', criteria)
    const collection = await dbService.getCollection('review')
    // const reviews = await collection.find(criteria).toArray()
    var reviews = await collection
      .aggregate([
        {
          $match: criteria,
        },
        {
          $lookup: {
            localField: 'userId',
            from: 'user',
            foreignField: '_id',
            as: 'byUser',
          },
        },
        {
          $unwind: '$byUser',
        },
        {
          $lookup: {
            localField: 'toyId',
            from: 'toy',
            foreignField: '_id',
            as: 'aboutToy',
          },
        },
        {
          $unwind: '$aboutToy',
        },
      ])
      .toArray()

    console.log('reviews', reviews)

    reviews = reviews.map(review => {
      review.byUser = {
        _id: review.byUser._id,
        fullname: review.byUser.fullname,
      }
      review.aboutToy = {
        _id: review.aboutToy._id,
        name: review.aboutToy.name,
        price: review.aboutToy.price,
      }
      delete review.userId
      delete review.toyId

      return review
    })
    // console.log('reviews', reviews)
    return reviews
  } catch (err) {
    logger.error('cannot find reviews', err)
    throw err
  }
}

async function remove(reviewId) {
  try {
    const store = asyncLocalStorage.getStore()
    const { loggedinUser } = store
    const collection = await dbService.getCollection('review')
    // remove only if user is owner/admin
    const criteria = { _id: ObjectId(reviewId) }
    if (!loggedinUser.isAdmin) criteria.byUserId = ObjectId(loggedinUser._id)
    const { deletedCount } = await collection.deleteOne(criteria)
    return deletedCount
  } catch (err) {
    logger.error(`cannot remove review ${reviewId}`, err)
    throw err
  }
}

async function add(review) {
  try {
    const reviewToAdd = {
      userId: ObjectId(review.userId),
      toyId: ObjectId(review.toyId),
      content: review.content,
      rate: review.rate,
    }
    const collection = await dbService.getCollection('review')
    await collection.insertOne(reviewToAdd)
    return reviewToAdd
  } catch (err) {
    logger.error('cannot insert review', err)
    throw err
  }
}

function _buildCriteria(filterBy) {
  const criteria = {}
  if (filterBy.byUserId) criteria.userId = ObjectId(filterBy.byUserId)
  if (filterBy.byToyId) criteria.toyId = ObjectId(filterBy.byToyId)
  return criteria
}

module.exports = {
  query,
  remove,
  add,
}
