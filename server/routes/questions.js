const jwt = require('koa-jwt');
const Router = require('koa-router');
const router = new Router({ prefix: '/questions' });
const {
  find, findById, create, update, delete: del,
  checkQuestionExist,
} = require('../controllers/questions');

const { secret } = require('../config');

const auth = jwt({ secret });

router.get('/', find);
router.post('/', create);
router.patch('/:id', update);
router.delete('/:id', del);
// router.post('/', auth, create);
// router.get('/:id', checkQuestionExist, findById);
// router.patch('/:id', auth, checkQuestionExist, update);
// router.delete('/:id', auth, checkQuestionExist, del);
// router.delete('/:id', auth, checkQuestionExist, del);

module.exports = router;