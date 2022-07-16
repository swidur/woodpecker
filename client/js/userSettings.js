import { getCookie, setCookie } from './helpers.js'

class UserSettings{
    constructor(){
        this._soundOn = this.loadFromCookieAsBool('soundOn') || false
        this._showCorrectMove = this.loadFromCookieAsBool('showCorrectMove') || false
    } 
    
    set soundOn(value){
        this._soundOn = value
        this.saveToCookie('soundOn',value)
    }

    get soundOn(){
        return this._soundOn
    }

    set showCorrectMove(value){
        this._showCorrectMove = value
        this.saveToCookie('showCorrectMove',value)
    }

    get showCorrectMove(){
        return this._showCorrectMove
    }

    loadFromCookieAsBool(name){
        var result = getCookie(name)
    
        if (result === 'true'){
            return true
        }
        else if (result === 'false'){
            return false
        }
        else{
            return undefined
        }
    }

    saveToCookie(name, value){
        setCookie(name, value)
    }
}

export { UserSettings }
