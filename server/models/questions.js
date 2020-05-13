const mongoose = require('mongoose')

const { Schema, model } = mongoose

const questionSchema = new Schema({
  __v: { type: Number, select: false },
  title: { type: String, required: true },
  options: { type: Array, required: true},
  answer: { type: Number, required: true},
  score: { type: Number, required: true}
})

module.exports = model('Question', questionSchema)