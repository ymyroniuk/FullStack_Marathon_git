"use strict";
const input = document.querySelector("input");
const submit = document.querySelector('#submit')
  submit.addEventListener('click', (event) => {
    event.preventDefault();
      if (input.value) {
      fetch('/upload/?url=' + input.value)
      .then((res) => res.json())
      .then((data) => {
       const img1 = document.querySelector('#images')
        img1.innerHTML =
        `<img src="public/${data.img[0]}">
        <img src="public/${data.img[1]}">
        <img src="public/${data.img[2]}">
        <img src="public/${data.img[3]}">`;
      });
  }
});