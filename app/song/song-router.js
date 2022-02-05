const songCtrl = require('./song-controller')

const { Router } = require('express')

const songRouter = new Router()

songRouter
  .route('/')
  .get(songCtrl.getMany)
  .post(songCtrl.postOne)

songRouter
  .route('/:songId')
  .get(songCtrl.getOne)
  .post(songCtrl.postOne)
  .put(songCtrl.putOne)
  .patch(songCtrl.patchOne)
  .delete(songCtrl.deleteOne)

module.exports = songRouter
