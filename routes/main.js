const Router = require('express-promise-router')
var path = require('path');

const router = new Router()
module.exports = router

router.get('/', async(req, res) => {
    res.sendFile(path.resolve('client/views/index.html'))
})
