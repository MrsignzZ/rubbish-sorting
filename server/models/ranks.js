const mongoose = require('mongoose')

const { Schema, model } = mongoose

const rankSchema = new Schema({
  __v: { type: Number, select: false },
  rank_score: { type: Number, required: true},
  ranker: { type: Schema.Types.ObjectId, ref: 'User', required: true },
})


module.exports = model('Rank', rankSchema)