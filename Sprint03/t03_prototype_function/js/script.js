"use strict"
String.prototype.removeDuplicates = function() {
    if (this) {
    let elem = this.trim().split(/\s+/);
    elem.filter((item, index) => {
        return elem.indexOf(item) === index;
    })
    console.log(elem);
return elem.join(" ");
}
}


let str = "Giant Spiders?   What’s next? Giant Snakes?";
console.log(str);
// Giant Spiders?   What’s next? Giant Snakes?
str = str.removeDuplicates();
console.log(str);
// Giant Spiders? What’s next? Snakes?
str = str.removeDuplicates();
console.log(str);
// Giant Spiders? What’s next? Snakes?

str = ". . . . ? . . . . . . . . . . . ";
console.log(str);
// . . . . ? . . . . . . . . . . .
str = str.removeDuplicates();
console.log(str);
// . ?
