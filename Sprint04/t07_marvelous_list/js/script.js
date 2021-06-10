const movieTitle = document.querySelectorAll('.movieTitle'),
      content = document.querySelectorAll('.content'),
      filmsPerent = document.querySelector('.films');
function noneContent() {
    content.forEach(item => {
        item.style.display = 'none';
    });
    movieTitle.forEach(name =>{
        name.classList.remove('active')
    })
} 
function showContent (i = 0) {
    content[i].style.display = 'block';
    movieTitle[i].classList.add('active');
}
noneContent()
showContent()

filmsPerent.addEventListener('click', (e)=> {
    const boom = e.target;
    if(boom && boom.classList.contains('movieTitle')) {
        movieTitle.forEach((item, i)=> {
            if(boom === item){
                noneContent();
                showContent(i);
            }
        })
    }
})