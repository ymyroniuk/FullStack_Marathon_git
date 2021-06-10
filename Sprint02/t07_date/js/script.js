"use strict"
function getFormattedDate(funcDat) {
    return(
        getFormattedDate(funcDat) + 
        '.' +
        getFormattedMonth(funcDat) +
        '.' +
        funcDat.getFullYear() +
        ' ' +
        getFormattedHours(funcDat) +
        ':' +
        getFormattedMinutes(funcDat) +
        ' ' +
        getFormattedDay(funcDat) 
        
    );
    function getFormattedDate(funcDat) {
        let x = funcDat.getDate();
        if (String(x).length == 1) {
            return (x = '0' + x);
        }
        return x;
    } 
    function getFormattedMonth(funcDat) {
        let x = funcDat.getMonth();
        if (String(x).length == 1) {
            return (x = '0' + (x + 1))
        }
        return x + 1
    }
    function getFormattedHours(funcDat) {
        let x = funcDat.getHours();
        if (String(x).length == 1) {
            return (x = '0' + x);
        }
        return x
    }
    function getFormattedMinutes(funcDat) {
        let x = funcDat.getMinutes();
        if (String(x).length == 1) {
            return (x = '0' + x)
        }
        return x
    }
    function getFormattedDay(funcDat) {
        let x = funcDat.getDay();
        switch (x) {
            case 0:
                return "Sunday";
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            case 6:
                return "Saturday";
                default:
                  return "";
        }
    }
}


const date0 = new Date(1993, 11, 1);
const date1 = new Date(1998, 0, -33);
const date2 = new Date('42 03:24:00');

console.log(getFormattedDate(date0)); // 01.12.1993 00:00 Wednesday
console.log(getFormattedDate(date1)); // 28.11.1997 00:00 Friday
console.log(getFormattedDate(date2)); // 01.01.2042 03:24 Wednesday
