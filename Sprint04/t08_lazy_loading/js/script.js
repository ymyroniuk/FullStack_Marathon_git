const images = document.querySelectorAll('[data-src]');

let numOfLoadedPages = 0;
let butt = document.querySelector('#butt');
let btn = document.querySelector('.btn');

function downloadsImage(img) {
    const src = img.getAttribute('data-src')
    if (!src) {
        return; 
    }
    img.src = src
    numOfLoadedPages++;
    butt.innerHTML = numOfLoadedPages;
    if(numOfLoadedPages == 20) {
        btn.style.background = 'green'
    }
}
const imgOptions = {
    threshold: 1,
    rootMargin: '0px 0px 150px 0px'
};
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            setTimeout(function(){
                downloadsImage(entry.target);
            },300)
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions)

images.forEach(image => {
    imgObserver.observe(image);
})