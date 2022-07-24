const express = require('express')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {log} = require('../../middlewares/logger.middleware')
const {/* addCmp */ getCmps, /* deleteCmp */} = require('./cmp.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', /* log */ getCmps)
router.post('/',  log, requireAuth, /* addCmp */)
router.delete('/:id',  requireAuth, /* deleteCmp */)

module.exports = router