const { Schema, model } = require('mongoose')

const song = {
  title: String,
  author: String,
  year: Number
}

const options = {
  timestamps: true
}

module.exports = model('song', new Schema(song, options))
