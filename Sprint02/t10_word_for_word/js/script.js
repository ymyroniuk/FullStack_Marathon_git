"use strict"
function addWords(obj, wrds) {
  let objWordsArr = obj.words.replace(/\s+/g, ' ').trim().split(" ");
  let newWordsArr = wrds.replace(/\s+/g, ' ').trim().split(" ");
  newWordsArr = objWordsArr.concat(newWordsArr);
  let newWords = newWordsArr.filter(function(item, index) {
     return newWordsArr.indexOf(item) == index
  }) .join(" ");
  return obj.words = newWords;
}
function removeWords(obj, wrds) {
  let objWordsArr = obj.words.split(" ");
  let newWordsArr = wrds.replace(/\s+/g, ' ').trim().split(" ");
  let newWords = objWordsArr.filter(function(el) {
    return !newWordsArr.includes(el);
  }) .join(" ");
  return obj.words = newWords;
}
function changeWords(obj, oldWrds, newWrds) {
  addWords(obj, newWrds);
  removeWords(obj, oldWrds)
}
const obj = {
    words: 'newspapers newspapers  books magazines'
  };
  
  console.log(obj); // {words: "newspapers newspapers  books magazines"}
  
  addWords(obj, 'radio newspapers   ');
  console.log(obj); // {words: "newspapers books magazines radio"}
  
  removeWords(obj, 'newspapers   radio');
  console.log(obj); // {words: "books magazines"}
  
  changeWords(obj, 'books radio  magazines', 'tv internet');
  console.log(obj); // {words: "tv internet"}