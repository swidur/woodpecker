const { fetchPuzzle, fetchHundredPuzzles } = require('../db/index.js')

class Puzzle{
    constructor(puzzleId, fen, moves, gameUrl){
        this.PuzzleId = puzzleId
        this.Fen = fen
        this.Moves = moves
        this.GameUrl = gameUrl
    }
}



async function getPuzzle(puzzleId){
    var result = (await fetchPuzzle(puzzleId)).rows[0]
    if (result == null){
      console.log(`Puzzle ${puzzleId} not found`)
      return null
    }
    console.log(`Returning puzzle ${puzzleId}`)
    return new Puzzle(result[0], result[1], result[2].split(' '), result[3])
  }

async function getHundredPuzzles(){
    var result = await fetchHundredPuzzles()
    if (result == null){
      console.log(`Hundred not found`)
      return null
    }
    console.log(`Returning hundred ids`)
    return result
  }


  module.exports = {
    Puzzle : Puzzle,
    getPuzzle : getPuzzle,
    getHundredPuzzles : getHundredPuzzles
}