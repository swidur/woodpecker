const { Pool } = require('pg');
const  Puzzle  = require('../data/Puzzle.js')
const logger = require('loglevel')
const { logDate } = require('../misc/Helpers.js')

const pool = new Pool({
  user: 'wdkpckr',
  host: 'localhost',
  database: 'woodpecker',
  port: 5432,
  password: '123test123'
})


module.exports = {
  query: async (text, params) => {
    const start = Date.now()
    return pool.query(text, params, (err, res) => {
      const duration = Date.now() - start
      console.log('executed query', { text, duration })
    })
  },
  fetchPuzzle: fetchPuzzle,
  fetchHundredPuzzles: fetchHundredPuzzles,
  storeSolvedPuzzle : storeSolvedPuzzle,
  fetchSolveHistory : fetchSolveHistory
}

async function fetchPuzzle(puzzleId) {
  let result;
  var query = "select puzzleId, fen, moves, gameUrl from puzzles where puzzleId = $1"
  const start = Date.now()
  try {
    result = await pool.query({
      text: query,
      values: [puzzleId],
      rowMode: "array"
    } )
  } catch (error) {
    throw error
  }
  const duration = Date.now() - start
  logger.trace(`${logDate()}: fetchPuzzle: time:${duration}ms, rows:${result.rowCount}, query:${query}, params:${puzzleId}`)
  return result
}

async function fetchHundredPuzzles() {
  let result;
  var query = "select * from hundredRandomIds"
  const start = Date.now()
  try {
    result = await pool.query({
      text: query,
      rowMode: "array"
    } )
  } catch (error) {
    throw error
  }
  const duration = Date.now() - start
  var idArr = []
  logger.trace(`${logDate()}: fetchHundredPuzzles: time:${duration}ms, rows:${result.rowCount}, query:${query}`)
  for (let i = 0; i < result.rowCount; i++){
    idArr.push(result.rows[i][0])
  }
  return idArr
}

async function storeSolvedPuzzle(puzzle, userId){
  let query = 'insert into solves values ($1, $2, $3, $4)'
  const start = Date.now()
  try {
    result = await pool.query({
      text: query,
      values: [puzzle.PuzzleId, userId, puzzle.STime, 'now()'],
      rowMode: "array"
    } )
  } catch (error) {
    throw error
  }
  const duration = Date.now() - start
  logger.trace(`${logDate()}: storeSolvedPuzzle: time:${duration}ms, query: ${query}`)
  return result
}


async function fetchSolveHistory(userId, limit=100) {
  let result;
  var query = "select s.puzzleId, s.stime, s.ctdate, p.gameUrl from solves s, puzzles p where s.puzzleId = p.puzzleId and userId = $1 order by ctdate desc limit $2 "
  const start = Date.now()
  try {
    result = await pool.query({
      text: query,
      values: [userId, limit],
      rowMode: "array"
    } )
  } catch (error) {
    throw error
  }
  const duration = Date.now() - start
  var idArr = []
  logger.trace(`${logDate()}: fetchSolveHistory: time:${duration}ms, rows:${result.rowCount}, query:${query}`)
  for (let i = 0; i < result.rowCount; i++){
    idArr.push([result.rows[i][0], result.rows[i][1], result.rows[i][2], result.rows[i][3]])
  }
  return idArr
}