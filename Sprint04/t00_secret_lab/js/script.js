function transformation() {
    let lab = document.getElementById('lab');
    let hero = document.getElementById('hero');

if(hero.innerHTML == 'Bruce Banner') {
    lab.style.background = "#70964b";
    hero.style.fontSize = '130px';
    hero.style.letterSpacing = "6px"
    hero.innerHTML = "Hulk";
}else {
    lab.style.background = "#ffb300";
    hero.style.fontSize = '60px';
    hero.style.letterSpacing = '2px';
    hero.innerHTML = 'Bruce Banner';
}
}
