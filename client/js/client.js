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
export { getPuzzle as getPuzzle }
export { getHundredPuzzleIds as getHundredPuzzleIds }