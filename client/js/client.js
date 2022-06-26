var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

// function getPuzzle(puzzleId){
//     const Http = new XMLHttpRequest();
//     var url = `http://localhost:9090/puzzle/${puzzleId}` 
//     Http.open("GET", url);
//     Http.send();
    
//     Http.onreadystatechange = (e) => {
//       console.log(Http.responseText)
//     }
// }

async function getData(ajaxurl) { 
    return $.ajax({
      url: ajaxurl,
      type: 'GET',
    });
  };
  
async function getPuzzle(puzzleId){
    var url = `http://localhost:9090/puzzle/${puzzleId}` 
    const res = await getData(url)
    return res
 }  
async function getHundredPuzzleIds(puzzleId){
    var url = `http://localhost:9090/puzzleList` 
    const res = await getData(url)
    return res
 }
export { getPuzzle as getPuzzle }
export { getHundredPuzzleIds as getHundredPuzzleIds }