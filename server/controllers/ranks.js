const Rank = require('../models/ranks')

class RanksCtl {
  async find(ctx) {
    const { per_page = 10 } = ctx.query
    const page = Math.max(ctx.query.page * 1, 1) - 1
    const perPage = Math.max(per_page * 1, 1)
    // const q = new RegExp(ctx.query.q)
    ctx.body = await Rank.find().populate({ path: 'ranker', select: 'name' }).limit(perPage).skip(page * perPage)
  }
  async checkRankExist(ctx, next) {
    const rank = await Rank.findById(ctx.params.id).select('+ranker');
    if (!rank) { ctx.throw(404, '榜单不存在'); }
    ctx.state.rank = rank;
    await next();
  }
  async create(ctx) {
    ctx.verifyParams({
      rank_score: { type: 'number', required: true },
    })
    console.log('ctx.state',ctx.state)
    const repeatedRank = await Rank.findOne({ ranker: ctx.state.user._id })
    console.log('repeatedRank', repeatedRank)
    if (repeatedRank) {
      ctx.throw(409, '榜单已存在')
    }
    const rank = await new Rank({ ...ctx.request.body, ranker: ctx.state.user._id }).save()
    ctx.body = rank
  }
  async checkRanker(ctx, next) {
    const { rank } = ctx.state;
    if (rank.ranker.toString() !== ctx.state.user._id) { ctx.throw(403, '没有权限'); }
    await next();
  }
  async update(ctx) {
    ctx.verifyParams({
      rank_score: { type: 'number', required: false },
    });
    await ctx.state.rank.update(ctx.request.body);
    ctx.body = ctx.state.rank;
  }
  async delete(ctx) {
    await Rank.findOneAndRemove(ctx.params.id)
    ctx.status = 204
  }
}
module.exports = new RanksCtl()