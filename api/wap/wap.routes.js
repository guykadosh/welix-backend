const express = require('express')
const {
  requireAuth,
  requireAdmin,
} = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')
const {
  getWaps,
  getWapById,
  addWap,
  updateWap,
  removeWap,
  addReview,
} = require('./wap.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', log, getWaps)
router.get('/:id', getWapById)
router.post('/', requireAuth, requireAdmin, addWap)
router.put('/:id', requireAuth, requireAdmin, updateWap)
router.delete('/:id', requireAuth, requireAdmin, removeWap)

module.exports = router
