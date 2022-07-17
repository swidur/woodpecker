var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);
var baseUrl = 'localhost:9090'

async function getData(ajaxurl) { 
    return $.ajax({
      url: ajaxurl,
      type: 'GET',
    });
  };

async function saveData(ajaxurl, data) {
   $.ajax({
    url: ajaxurl,
    type: 'POST',
    data: data,
    dataType: "json",
    
  }) 
}

async function getPuzzle(puzzleId){
    var url = `http://${baseUrl}/puzzle/${puzzleId}` 
    const res = await getData(url)
    return res
 }  
async function getHundredPuzzleIds(puzzleId){
    var url = `http://${baseUrl}/puzzleList` 
    const res = await getData(url)
    return res
 }

async function postSolvedPuzzle(puzzle, userId){
    var url = `http://${baseUrl}/solved` 
    puzzle.Moves = null
    puzzle.Fen = null
    puzzle.GameUrl = null
    var payload = {
      PuzzleId : puzzle.PuzzleId,
      STime : puzzle.STime,
      userId
    }
    const res = saveData(url, payload)
    return res
}

async function getSolveHistory(userId){
  var url = `http://${baseUrl}/history/${userId}` 
  const res = await getData(url)
  return res
}

export { getPuzzle as getPuzzle }
export { getHundredPuzzleIds as getHundredPuzzleIds }
export { postSolvedPuzzle }
export { getSolveHistory }