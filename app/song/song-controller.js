const Song = require('./song-model')

const getOne = (req, res, nxt) =>
  Song
    .findById(req.params.songId)
    .then(song => res.json(song))
    .catch(err => nxt(err))

const getMany = (req, res, nxt) =>
  Song
    .find()
    .then(songs => res.json(songs))
    .catch(err => nxt(err))

const postOne = (req, res, nxt) =>
  Song
    .create(req.body)
    .then(newSong => res.json(newSong))
    .catch(err => nxt(err))

const putOne = (req, res, nxt) =>
  Song
    .findOneAndReplace({ _id: req.params.songId }, req.body)
    .then(oldSong => res.json(oldSong))
    .catch(err => nxt(err))

const patchOne = (req, res, nxt) =>
  Song
    .findByIdAndUpdate(req.params.songId, req.body)
    .then(oldSong => res.json(oldSong))
    .catch(err => nxt(err))

const deleteOne = (req, res, nxt) =>
  Song
    .findByIdAndDelete(req.params.songId)
    .then(deletedSong => res.json(deletedSong))
    .catch(err => nxt(err))

module.exports = {
  getOne,
  getMany,
  postOne,
  putOne,
  patchOne,
  deleteOne
}
