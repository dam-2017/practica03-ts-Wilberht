"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cadena = (function () {
    function Cadena(cadena) {
        this.cad = cadena;
    }
    Object.defineProperty(Cadena.prototype, "getPalindromo", {
        get: function () {
            if (this.cad == '')
                return false;
            var t = "";
            var temp = this.cad.split("");
            for (var w in temp) {
                if (temp[w] != " ")
                    t = t + temp[w];
            }
            var a = 0, b = t.length - 1;
            var size = parseInt((t.length / 2).toFixed(0));
            if (t.length == 1)
                return true;
            for (; a < size; a++, b--) {
                if (t[a] != t[b])
                    return false;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "getLetters", {
        get: function () {
            var data = [0, 0, 0, 0, 0];
            var text = this.cad.trim().split("");
            //let size : number = this.cad.length;        
            for (var a in text) {
                if (text[a] == "a")
                    data[0] = data[0] + 1;
                else if (text[a] == "e")
                    data[1] = data[1] + 1;
                else if (text[a] == "i")
                    data[2] = data[2] + 1;
                else if (text[a] == "o")
                    data[3] = data[3] + 1;
                else if (text[a] == "u")
                    data[4] = data[4] + 1;
            }
            /*for(let i = 0; i < size; i++){
                if(this.cad.charAt(i) in vowels){
                    count++;
                }
            }*/
            return data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "getCountLetters", {
        get: function () {
            return this.cad.trim().length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "getCountWords", {
        get: function () {
            return this.cad.split(" ").length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "getText", {
        get: function () {
            return this.cad;
        },
        enumerable: true,
        configurable: true
    });
    return Cadena;
}());
exports.Cadena = Cadena;
