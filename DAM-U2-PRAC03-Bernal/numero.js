"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Numero = (function () {
    function Numero(num1, num2) {
        this.n1 = num1;
        this.n2 = num2;
    }
    Object.defineProperty(Numero.prototype, "getAdd", {
        get: function () {
            return this.n1 + this.n2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Numero.prototype, "getSubstract", {
        get: function () {
            return this.n1 - this.n2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Numero.prototype, "getFactorial", {
        get: function () {
            var array = [1, 1];
            if ((this.n1 == 0 || this.n1 == 1) && (this.n2 == 0 || this.n2 == 1)) {
                return array;
            }
            for (var i = 2; i <= this.n1; i++)
                array[0] = array[0] * i;
            for (var j = 2; j <= this.n2; j++)
                array[1] = array[1] * j;
            return array;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Numero.prototype, "getPrimo", {
        get: function () {
            var array = [true, true];
            var count = 0;
            for (var i = 1; i <= this.n1; i++) {
                if (this.n1 % i == 0)
                    count++;
            }
            if (count > 2)
                array[0] = false;
            count = 0;
            for (var j = 1; j <= this.n2; j++) {
                if (this.n2 % j == 0)
                    count++;
            }
            if (count > 2)
                array[1] = false;
            return array;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Numero.prototype, "getvalue1", {
        get: function () {
            return this.n1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Numero.prototype, "getvalue2", {
        get: function () {
            return this.n2;
        },
        enumerable: true,
        configurable: true
    });
    return Numero;
}());
exports.Numero = Numero;
