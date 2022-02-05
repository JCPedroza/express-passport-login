const http = require('http')

const app = require('../app/app')

const listen = () => {
  const PORT = parseInt(process.env.PORT) || 8000
  const server = http.createServer(app)
  const logFun = () => console.log(`Server listening to ${PORT}`)

  return server.listen(PORT, logFun)
}

module.exports = {
  listen
}
