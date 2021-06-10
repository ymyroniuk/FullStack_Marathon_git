"use strict"
function* generator() {
    let num = 1;
    while(!isNaN(num)) {
        num += +prompt(`Previous result ${num}. Enter new number:`);
        if(num >= 10000)
        num = 1;
    }
    console.log('Invalid number')
    alert('Invalid number')
    return 0;
}
var gen = generator()
gen.next()

