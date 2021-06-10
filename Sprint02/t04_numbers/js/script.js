"use strict"
function checkDivision(beginRange, endRange) {
    if (
        beginRange === "" ||
        endRange === "" ||
        beginRange === null ||
        endRange === null ||
        Number(beginRange) >= Number (endRange)
    )
    {
        alert("The default range is from 1 to 100");
        beginRange = 1;
        endRange = 100;
    }
    for (let i = Number(beginRange); i <= Number(endRange); i++ ) {
        if (i % 2 !== 0 && i % 3 !== 0 && i % 10 !== 0) {
            console.log('${i} -');
        }
        else if (i % 3 === 0 && i % 10 === 0 && i % 2 ===0) {
            console.log('${i} is even, a multiple of 3, a multiple of 10'); 
        }
        else if (i % 3 === 0 && i % 10 === 0) {
            console.log('${i} is a multiple of 3, a multiple of 10');
        }
        else if (i % 2 === 0 && i % 10 === 0) {
            console.log('${i} is even, a multiple of 10');
        }
        else if (i % 2 === 0 && i % 3 === 0) {
            cosole.log('${i} is even, a multiple of 3');
        }
        else if ( i % 2 === 0) {
            console.log('${i} is even');
        }
        else if (i % 3 === 0) {
            console.log('${i} is a multiple of 3');
        }
        else if (i % 10 === 0) {
            console.log('${i} is a multiple of 10');
        }
    }
}
let beginRange = prompt('Enter start of range');
let endRange = prompt('Enter end of range');
checkDivision(beginRange, endRange);