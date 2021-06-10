"use strict"
function Calculator () {
    this.result = 0;
    this.init = function(x) {this.result = x;  return this};
    this.add = function(x) {this.result += x;  return this};
    this.mul = function(x) {this.result *= x; return this};
    this.sub = function(x) {this.result -= x;  return this};
    this.div = function(x) {this.result /= x;  return this};
    this.alert = function() {setTimeout(() => alert(this.result), 5000);
    };
}
const calc = new Calculator();

console.log(
    calc
        .init(2)
        .add(2)
        .mul(3)
        .div(4)
        .sub(2).result // 1
);

calc.alert();
