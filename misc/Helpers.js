

function isEmptyObject(value) {
    return Object.keys(value).length === 0 && value.constructor === Object;
}  
function logDate(){
  return new Date(Date.now()).toLocaleString()
}
  

  module.exports = {
    // isEmptyObject : isEmptyObject,
    logDate: logDate
}