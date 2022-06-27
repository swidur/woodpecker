const express = require('express')
const mountRoutes = require('./routes')
const logger = require('loglevel')
var favicon = require('serve-favicon')
var path = require('path')
var {query} = require('./db/index.js')
var cors = require('cors')

logger.setLevel('debug')

const app =express()
app.use(cors())
mountRoutes(app)

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use("/css", express.static(__dirname + '/node_modules/chessground/assets'));
app.use("/js", express.static(__dirname + '/node_modules/chessground'));
app.use("/js", express.static(__dirname + '/node_modules/chess.js'));
app.use("/js", express.static(__dirname + '/client/js'));
app.use("/sounds", express.static(__dirname + '/client/sounds'));
app.use("/js", express.static(__dirname + '/node_modules/sound-play/build'));
app.use("/js", express.static(__dirname + '/node_modules/sound-play/src'));
app.use("/js", express.static(__dirname + '/node_modules/axios/build'));
var timerID = setInterval(function() {
  query('REFRESH MATERIALIZED VIEW concurrently hundredrandomids')
}, 60 * 1000); 
app.listen(9090)