const main = require('./main')
const puzzle = require('./puzzle')

module.exports = app => {
  app.use('/', main)
  app.use('/', puzzle)
}