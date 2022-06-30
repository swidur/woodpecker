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

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  var c = cname + "=" + cvalue + ";" + expires + ";path=/"
  console.log(c)
  document.cookie = c ;
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


export { playMoveSound as playMoveSound }
export { shuffle as shuffle }
export { setCookie as setCookie }
export { getCookie as getCookie }

