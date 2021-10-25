const infoForm = document.querySelector('.info-form')
const { form } = document.forms

function showData(event) {
    event.preventDefault()
    let result = ''
    const { name, mail, age, text, photo } = form
    const values = {
        name: name.value,
        email: mail.value,
        age: age.value,
        text: text.value,
        photo: photo.value
    }
    console.log(values);
    Object.entries(values).map((name) => {
        console.log(name);
        result += `\t[${name[0]}] => ${name[1]} <br>`
    })
    infoForm.innerHTML = `Array<br>(<pre>${result}<pre>)`
}

form.addEventListener('submit', showData)