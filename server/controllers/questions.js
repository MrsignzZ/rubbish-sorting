const Question = require('../models/questions')

class QuestionsCtl {
  async find(ctx) {
    const { per_page = 10 } = ctx.query
    const page = Math.max(ctx.query.page * 1, 1) - 1
    const perPage = Math.max(per_page * 1, 1)
    const q = new RegExp(ctx.query.q)
    ctx.body = await Question.find({ $or: [{ title: q }, { description: q }] }).limit(perPage).skip(page * perPage)
  }
  async checkQuestionExist(ctx, next) {
    const question = await Question.findById(ctx.params.id).select('+ranker');
    if (!question) { ctx.throw(404, '问题不存在'); }
    ctx.state.question = question;
    await next();
  }
  async findById(ctx) {
    const { fields = '' } = ctx.query
    const selectFields = fields.split(';').filter(f => f).map(f => ' +' + f).join('')
    const question = await Question.findById(ctx.params.id).select(selectFields).populate('questioner topics')
    ctx.body = question
  }
  async create(ctx) {
    ctx.verifyParams({
      title: { type: 'string', required: true },
      options: { type: 'array', required: true },
      answer: { type: 'number', required: true },
      score: {type: 'number', required: true}
    })
    
    const question = await new Question(ctx.request.body).save()
    ctx.body = question
  }
  async update(ctx) {
    ctx.verifyParams({
      title: { type: 'string', required: false },
      description: { type: 'string', required: false },
    });
    await ctx.state.question.update(ctx.request.body);
    ctx.body = ctx.state.question;
  }
  async delete(ctx) {
    await Question.findOneAndRemove(ctx.params.id)
    ctx.status = 204
  }
}
module.exports = new QuestionsCtl()