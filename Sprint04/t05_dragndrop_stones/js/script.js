let div = document.querySelectorAll('div');

div.forEach(function(subject, i){
    subject.addEventListener('click', function(){
    div[i].classList.toggle('border');

if(div[i].classList.contains('border')) {
    div[i].setAttribute('draggable', 'true');
    div[i].addEventListener('dragend', function(e) {
    subject.style.top = e.pageY + 'px';
    subject.style.left = e.pageX + 'px';
})
}else {
    div[i].removeAttribute('draggable');
}
    })
})