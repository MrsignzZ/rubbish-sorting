const mongoose = require('mongoose')

const { Schema, model } = mongoose

const trashSchema = new Schema({
  __v: { type: Number, select: false },
  name: { type: String, required: true },
  type: { type: Number, required: true },
  city: { type: String },
  tip: { type: String}
})


module.exports = model('Trash', trashSchema)