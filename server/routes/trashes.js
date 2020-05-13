const Router = require('koa-router')
const jwt = require('koa-jwt')
const router = new Router({ prefix: '/trashes' })
const { find, findByName, create, update }
  = require('../controllers/trashes')

// const { secret } = require('../config')
// const auth = jwt({ secret })


router.get('/', find)
router.get('/query', findByName)
// router.post('/', auth, create)
router.post('/', create)
// router.get('/:id', findById)
// router.patch('/:id', auth, update)

module.exports = router