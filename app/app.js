require('dotenv').config()

const express = require('express')
const morgan = require('morgan')

const db = require('./database/database')
const songRouter = require('./song/song-router')

db.initialize()
const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use('/songs', songRouter)

module.exports = app
