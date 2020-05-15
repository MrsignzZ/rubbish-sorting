const Router = require('koa-router')
const jwt = require('koa-jwt')
const router = new Router({ prefix: '/ranks' })
const { find, create, update, checkRankExist, checkRanker }
  = require('../controllers/ranks')

const { secret } = require('../config')
const auth = jwt({ secret })


router.get('/', find)
// router.post('/', auth, create)
router.post('/', auth, create)
// router.get('/:id', findById)
router.put('/:id', auth, checkRankExist, checkRanker, update)

module.exports = router