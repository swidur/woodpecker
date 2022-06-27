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
  fetchHundredPuzzles: fetchHundredPuzzles
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
  logger.debug(`${logDate()}: fetchPuzzle: time:${duration}ms, rows:${result.rowCount}, query:${query}, params:${puzzleId}`)
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
  logger.debug(`${logDate()}: fetchHundredPuzzles: time:${duration}ms, rows:${result.rowCount}, query:${query}`)
  for (let i = 0; i < result.rowCount; i++){
    idArr.push(result.rows[i][0])
  }
  return idArr
}
