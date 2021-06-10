"use strict"
let guestList = new Set();
guestList.add('John').add('Marina').add('Artem').add('Elena').add('Katrin');
console.log(guestList)
    for(let elem of guestList)
    console.log(elem);
console.log(guestList.has('Yarik'));
console.log(guestList.size);
guestList.delete('Artem');
console.log(guestList);
guestList.clear();
console.log(guestList);
console.log('- - - - - - - ');

let menu = new Map();
menu.set('salad', 3).set('soup', 2).set('burger', 5).set('cake', 4).set('meat', 1.5);
console.log(menu);
for (let [key, value] of menu)
console.log(`${key}'s price is ${value}`);
menu.delete('meat');
console.log(menu.has('pizza'));
console.log(menu.size)
menu.clear();
console.log(menu);
console.log("- - - - - - - - - ")

let bankVault = new WeakMap();
let user = {};
let user2 = {};
bankVault.set(user, 'content').set(user2, 'content');
console.log(bankVault);
console.log(bankVault.has(user));
console.log(bankVault.get(user2));
bankVault.delete(user2);
console.log(bankVault);
console.log("- - - - - - - -")
  

let coinCollection = new WeakSet();
let obj = {
    "coin":"content"
}
let obj1 = {
    "coin":"content"
}
let obj2 = {
    "coin":"content"
}
coinCollection.add(obj).add(obj1).add(obj2);
console.log(coinCollection);
console.log(coinCollection.has(obj));
coinCollection.delete(obj2);
console.log(coinCollection)