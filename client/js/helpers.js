function playMoveSound(move, capturedPiece){

    if (move === null){
        return
    }
    else if (capturedPiece != undefined){
        var audio = new Audio('../sounds/Capture.mp3')
        audio.play()
        return
    }
    var audio = new Audio('../sounds/Move.mp3')
    audio.play()
    return
}

function shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }


export { playMoveSound as playMoveSound }
export { shuffle as shuffle }
