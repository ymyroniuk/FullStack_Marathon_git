"use strict"
let total = (addCount, addPrice, currentTotal = 0) => {
    return (addCount * addPrice) + currentTotal
let result = (addCount * addPrice) + currentTotal;
    return result.toFixed(2)
}

let sum = total(1, 0.1);
sum = total(1, 0.2, sum);
sum = total(1, 0.78, sum);
sum = total(1, 0.4, sum);
console.log(sum); //will return 1.48
