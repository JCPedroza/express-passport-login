const { connect } = require('mongoose')

const initialize = () => {
  const DBURL = process.env.DBURL
  const logFun = () => console.log(`DB connected ${DBURL}`)
  connect(DBURL, logFun)
}

module.exports = {
  initialize
}
