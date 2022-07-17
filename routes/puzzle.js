const Router = require('express-promise-router')
const logger = require('loglevel')
const { logDate } = require('../misc/Helpers.js')
const  { Puzzle, getPuzzle, getHundredPuzzles, saveSolvedPuzzle, getSolveHistory }  = require('../data/Puzzle.js')

const router = new Router()
module.exports = router

router.get('/puzzle/:puzzleId', async(req, res) => {
    const { puzzleId } = req.params
    var puzzle = await getPuzzle(puzzleId)
    if (puzzle === null){
        res.sendStatus(404)
        return
    }
    res.send(puzzle)
})

router.get('/puzzlelist', async(req, res) => {
    logger.debug(`${logDate()}: /puzzleList`)
    const { puzzleId } = req.params
    var puzzle = await getHundredPuzzles()
    if (puzzle === null){
        res.sendStatus(404)
        return
    }
    res.send(puzzle)
})

router.get('/find', async(req, res) => {
    var params  = req.params
    console.log(params)
    res.send(params)
})

router.post('/solved', async (req, res) => {
    logger.debug(`${logDate()}: /solved`)
    await saveSolvedPuzzle(req.body) === null ? res.sendStatus(418) : res.sendStatus(201)
})

router.get('/history/:userId', async(req, res) => {
    logger.debug(`${logDate()}: /history`)
    const { userId } = req.params
    var history = await getSolveHistory(userId)
    if (history === null){
        res.sendStatus(404)
        return
    }
    res.send(history)
})