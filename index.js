const express = require('express')
const mountRoutes = require('./routes')
const logger = require('loglevel')
var favicon = require('serve-favicon')
var path = require('path')
var {query} = require('./db/index.js')
var cors = require('cors')
var compression = require('compression')
var minify = require('express-minify');
var bodyParser = require('body-parser')

logger.setLevel('debug')

const app =express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
mountRoutes(app)

app.use(compression())
app.use(minify())

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use("/css", express.static(__dirname + '/node_modules/chessground/assets', { maxAge: 31557600 }));
app.use("/js", express.static(__dirname + '/node_modules/chessground', { maxAge: 31557600 }));
app.use("/js", express.static(__dirname + '/node_modules/chess.js', { maxAge: 31557600 }));
app.use("/js", express.static(__dirname + '/client/js'));
app.use("/sounds", express.static(__dirname + '/client/sounds', { maxAge: 31557600 }));
app.use("/js", express.static(__dirname + '/node_modules/sound-play/build', { maxAge: 31557600 }));
app.use("/js", express.static(__dirname + '/node_modules/sound-play/src', { maxAge: 31557600 }));
app.use("/js", express.static(__dirname + '/node_modules/axios/build', { maxAge: 31557600 }));
var timerID = setInterval(function() {
  query('REFRESH MATERIALIZED VIEW concurrently hundredrandomids')
}, 60 * 1000); 
app.listen(9090)