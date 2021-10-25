  function showMessage() {
  const radio = document.querySelectorAll("input[type=radio]")
  const answer = document.querySelector('#show')
    radio.forEach((item) => {
      if (item.checked) {
        if (item.classList.contains('first')) {
          answer.innerHTML = `Incorrect`;
        }
        else if (item.classList.contains('second')) {
          answer.innerHTML = `Correct`;
        } else if (item.classList.contains('third')) {
          answer.innerHTML = `Incorrect`;
        }
     }
  })
}