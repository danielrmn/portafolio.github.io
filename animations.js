const menuToggle = document.querySelector('.menuToggle');
const navegation = document.querySelector('.navegation');
const list = document.querySelectorAll('.list');


menuToggle.onclick = function(){
    navegation.classList.toggle('open');
}

function activeLink(){
    list.forEach((item) => 
        item.classList.remove('active'));
        this.classList.add('active');
}

list.forEach(item => 
    item.addEventListener('click', activeLink));



window.addEventListener('wheel', () => {
    let skills = document.getElementById('skills');
    const skillName = document.querySelectorAll('.skill-name');
    const dot = document.querySelectorAll('.dot');
    const circle = document.querySelectorAll('svg .circle');
    let position = skills.getBoundingClientRect().top;
    let screenSize = window.innerHeight / 1.5;

    for(i=0; i < 5; i++){
        let topskillName = skillName[i];
        if(position < screenSize){
            skillName[i].style.animation = 'fefeIn 1s linear forwards';
            dot[i].style.animation = 'animateDot 2s linear forwards';
            circle[i].style.animation = 'fefeIn 1s linear forwards';
        }
    }
})


