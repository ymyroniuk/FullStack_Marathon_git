const wrap = document.querySelector('.wrap');
let plusCalor,
timer;

class Human {
  constructor(opti) {
    this.name = opti.name;
    this.lastName = opti.lastName;
    this.gender = opti.gender;
    this.age = opti.age;
    this.calories = opti.calories;
    this.src = opti.src;
  }
  
  sleepFor() {
    let ask  = +prompt(`How many seconds will sleep?`,6);
    buts.style.opacity = 0;
    countdown();

    function countdown(){
      modalTotal.style.display = "block";
      modalTotal.innerHTML = `Sleep &#128564 ${ask}`;
      ask --;

      if (ask <= 0){
        modalTotal.style.display = "none";
        buts.style.opacity = 1;
        clearTimeout(timer);

      }else{
        timer = setTimeout(countdown,1000);
      }
    }
  }
  feed() {
    modal.style.display = "none";
    hung.style.display = "none";
    plusCalor = setInterval(() => {
      this.calories += 200/10 ;
      calori.innerHTML = 'Calories:'+ Math.floor(this.calories)
      
    }, 100);
    
    if(this.calories < 500){
      eat.style.display = "block";

      setTimeout(() => {
        clearInterval(plusCalor);
        eat.style.display = "none";

        if(this.calories < 500){
          hung.style.display = 'block';
          
        }else{
          full.style.display = "block";
          eat.style.display = "none";
          clearInterval(plusCalor);
          turnSuperhero.style.display = 'block';
          setInterval(() => {
            full.style.display = "none";
          }, 1000);
        }
      }, 1000);
    }else{
      full.style.display = "block";
      clearInterval(plusCalor);
    }
  }

  minusCalori(){

    setInterval(() => {
      this.calories--;
      calori.innerHTML =`Calories: ${this.calories}`;
    },1000);
    
   }
  
}


class Superhero extends Human {
  
  fly() {
    buts.style.opacity = 0;
    let flyTime  = 8;
    countdown();

    function countdown(){
      modalTotal.style.display = "block";
      modalTotal.style.background = '#b0d0d3';
      modalTotal.innerHTML = `I'm flying! ${flyTime} &#129464`;
      flyTime --;

      if (flyTime <= 0){
        modalTotal.style.display = "none";
        buts.style.opacity = 1;
        clearTimeout(timer);

      }else{
        timer = setTimeout(countdown,1000);
      }
    }
  }
  
  fightWithEvil() {
    buts.style.opacity = 0;
    let fightTime  = 5;
    countdown();

    function countdown(){
      modalTotal.style.display = "block";
      modalTotal.style.background = '#EC4040'
      modalTotal.innerHTML = `&#9760 Khhhh-chh... Bang-g-g-g... Evil is defeated! ${fightTime} &#9760`;
      fightTime --;

      if (fightTime <= 0){
        modalTotal.style.display = "none";
        buts.style.opacity = 1;
        clearTimeout(timer);

      }else{
        timer = setTimeout(countdown,1000);
      }
    }
  }
}

//Описание 
let human = new Human({
  name: 'Peter',
  lastName: 'Parker',
  gender: 'male',
  age: 23,
  calories:200,
  src: './assets/images/Peter.png',
});
human.minusCalori();
//Описание Супергероя 
let superHuman = new Superhero({
  name: 'Spider-Man',
  gender: 'superhero',
  src: './assets/images/Spider.jpeg',
})

const content = document.createElement('div');
content.innerHTML = `
 <span class="modalTotal"></span>
   <div class="feed">
<p class="eat">Nom nom nom &#127828 &#129385 </p>
<p class="hung">I'm still hungry &#128545</p>
<p class="full">I'm not hungry &#129303</p> 
</div>
<p class="modal"> I'm hungry &#128545</p>
<div class="content">
<div class="content2">
<img class="photo" src=${human.src} alt="#">
<p>First name: ${human.name}</p>
<p>Last name: ${human.lastName}</p>
<p>Gender: ${human.gender}</p>
<p>Age: ${human.age}</p>
</div>
<p class="calori">Calories: ${human.calories}</p>
</div>
`;
wrap.appendChild(content);


  const feed = document.querySelector('#feed'),
  buts =document.querySelector('.but'),
  calori = document.querySelector('.calori'),
  hung = document.querySelector('.hung'),
  eat  = document.querySelector('.eat'),
  full = document.querySelector('.full'),
  meat = document.querySelector('.calori'),
  sleep = document.querySelector('#sleep'),
  modal = document.querySelector('.modal'),
  modalTotal = document.querySelector('.modalTotal'),
  sleepTime = document.querySelector('.sleepTime'),
  turnSuperhero = document.querySelector('#turnSup'),
  flyBtn = document.querySelector('#fly'),
  fightBtn = document.querySelector('#fight');

//Голод первые сек
  let openHungry = setTimeout(() => modal.style.display = "block",1000)
//  Нажатие кнопок
  feed.addEventListener('click', () => {human.feed() });
  sleep.addEventListener('click',() => {human.sleepFor()});
  flyBtn.addEventListener('click',() => {superHuman.fly()});
  fightBtn.addEventListener('click', () => {superHuman.fightWithEvil()})
  turnSuperhero.addEventListener('click', sup)
  //Превращение 
  function sup(){
   
  let contentSuper = document.querySelector('.content2');
  contentSuper.innerHTML = `<img class = "photo2" src=${superHuman.src} alt="#">
  <p>First name: ${superHuman.name}</p>
  <p>Gender: ${superHuman.gender}</p>
  `;

   turnSuperhero.style.display = 'none';
   flyBtn.style.display = 'block';
   fightBtn.style.display = 'block';
   
  }
