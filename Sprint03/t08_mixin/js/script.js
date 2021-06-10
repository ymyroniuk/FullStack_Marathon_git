"use strict"
let mixin = {
    wordReplace(from, to) {
        if(from && to) {
            this.description = this.description.replace(from, to);
        }
    },
    wordInsertAfter(word, toInsert) {
        this.description = this.description.replace(word, (word + " ") + toInsert);
    },
    wordDelete(str) {
        this.description = this.description.replace(str, "");
    },
    wordEncrypt() {
        this.description = this.description.replace(/[a-z]/gi, c =>
            String.fromCharCode(c.charCodeAt() + 13 - 26 * /[n-z]/i.test(c)));
   },
   wordDecrypt() {
        this.description = this.description.replace(/[a-z]/gi, c =>
            String.fromCharCode(c.charCodeAt() - 13 + 26 * /[a-m]/i.test(c)));
   }
}
const house = new HouseBuilder('88 Crescent Avenue',
    'Spacious town house with wood flooring, 2-car garage, and a back patio.',
    'J. Smith', 110, 5);

Object.assign(house, mixin);

console.log(house.getDaysToBuild()); 
// 220
console.log(house.description);
// Spacious town house with wood flooring, 2-car garage, and a back patio.

house.wordReplace("wood", "tile");
console.log(house.description);
// Spacious town house with tile flooring, 2-car garage, and a back patio.

house.wordDelete("town ");
console.log(house.description);
// Spacious house with tile flooring, 2-car garage, and a back patio.

house.wordInsertAfter ("with", "marble");
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.

house.wordEncrypt();
console.log(house.description);
// Fcnpvbhf ubhfr jvgu zneoyr gvyr sybbevat, 2-pne tnentr, naq n onpx cngvb.

house.wordDecrypt();
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.

//wordEncrypt() {
    //this.description = this.description.replace(/[a-z]/gi, c =>
       // String.fromCharCode(c.charCodeAt() + 13 - 26 * /[n-z]/i.test(c)));
//},
//wordDecrypt() {
   // this.description = this.description.replace(/[a-z]/gi, c =>
      //  String.fromCharCode(c.charCodeAt() - 13 + 26 * /[a-m]/i.test(c)));
//}