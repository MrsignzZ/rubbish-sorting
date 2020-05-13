const jsonwebtoken = require('jsonwebtoken');
const User = require('../models/users');
const Question = require('../models/questions');
const Trash = require('../models/trashes');
// const Answer = require('../models/answers');
const { secret } = require('../config');

class TrashesCtl {
  async find(ctx) {
    const { per_page = 10 } = ctx.query;
    const page = Math.max(ctx.query.page * 1, 1) - 1;
    const perPage = Math.max(per_page * 1, 1);
    ctx.body = await Trash
      .find({ name: new RegExp(ctx.query.q) })
      .limit(perPage).skip(page * perPage);
  }
  async findByName(ctx) {
    const { name, city } = ctx.query;
    const trash = await Trash.findOne({ name, city });
    if (!trash) { ctx.throw(404, '垃圾不存在'); }
    ctx.body = trash;
  }

  async create(ctx) {
    ctx.verifyParams({
      name: { type: 'string', required: true },
      type: { type: 'number', required: true },
      city: { type: 'string' },
      tip: { type: 'string' }
    });
    const { name, city } = ctx.request.body;
    // console.log(name, city_code)
    const repeatedTrash = await Trash.findOne({ name, city });
    // console.log(repeatedTrash)
    if (repeatedTrash) { ctx.throw(409, '该垃圾已存在'); }
    const trash = await new Trash(ctx.request.body).save();
    ctx.body = trash;
  }
  // async checkOwner(ctx, next) {
  //   if (ctx.params.id !== ctx.state.user._id) { ctx.throw(403, '没有权限'); }
  //   await next();
  // }
  async update(ctx) {
    ctx.verifyParams({
      name: { type: 'string', required: true },
      trash_type: { type: 'string', required: true },
      city_code: { type: 'string', required: true },
      city: { type: 'string' },
      ps: { type: 'string' }
    });
    const trash = await Trash.findByIdAndUpdate(ctx.params.id, ctx.request.body);
    if (!trash) { ctx.throw(404, '垃圾不存在'); }
    ctx.body = trash;
  }
  async delete(ctx) {
    const trash = await Trash.findByIdAndRemove(ctx.params.id);
    if (!trash) { ctx.throw(404, '垃圾不存在'); }
    ctx.status = 204;
  }
  
  // async checkUserExist(ctx, next) {
  //   const user = await User.findById(ctx.params.id);
  //   if (!user) { ctx.throw(404, '用户不存在'); }
  //   await next();
  // }
  
}

module.exports = new TrashesCtl();