const { fetchPuzzle, fetchHundredPuzzles, storeSolvedPuzzle, fetchSolveHistory } = require('../db/index.js')
const logger = require('loglevel')
const { logDate } = require('../misc/Helpers.js')

class Puzzle{
    constructor(puzzleId, fen, moves, gameUrl, sTime){
        this.PuzzleId = puzzleId
        this.Fen = fen
        this.Moves = moves
        this.GameUrl = gameUrl
        this.STime = sTime
    }
}

async function getPuzzle(puzzleId){
    var result = (await fetchPuzzle(puzzleId)).rows[0]
    if (result == null){
      logger.debug(`${logDate()} Puzzle ${puzzleId} not found`)
      return null
    }
    logger.debug(`${logDate()} Returning puzzle ${puzzleId}`)
    return new Puzzle(result[0], result[1], result[2].split(' '), result[3])
  }

async function getHundredPuzzles(){
    var result = await fetchHundredPuzzles()
    if (result == null){
      logger.debug(`${logDate()} Hundred not found`)
      return null
    }
    logger.debug(`${logDate()} Returning hundred ids`)
    return result
  }

async function saveSolvedPuzzle(payload){
  let puzzle = new Puzzle(payload.PuzzleId, null, null, null, payload.STime)
  let userId = payload.userId
  return storeSolvedPuzzle (puzzle, userId)
}

async function getSolveHistory(userId, limit){
  logger.debug(`${logDate()} getSolveHistory`)
  limit = limit > 0 ? limit : limit < 1000 ? limit : 100
  return fetchSolveHistory(userId, limit)
}

  module.exports = {
    Puzzle : Puzzle,
    getPuzzle : getPuzzle,
    getHundredPuzzles : getHundredPuzzles,
    saveSolvedPuzzle : saveSolvedPuzzle,
    getSolveHistory : getSolveHistory
}