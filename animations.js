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



window.addEventListener('scroll', () => {
    let skillName = document.querySelectorAll('.skill-name');
    let position = skillName.getBoundingClientRect().top;
    console.log(position);
    let screenSize = window.innerHeight / 3.5;

    if (position < screenSize){
        skillName.style.animation = 'fefeIn 1s linear forwards';
        // skillName.style.animation = 'fefeIn 1s linear forwards';
        //skills.style.animation = 'animateDot 2s linear forwards';
    }
})

// let circlecard= this.document.querySelectorAll('.circle-card svg circle:nth-child(2)');
// let skillName = this.document.querySelectorAll('.skill-name');
// let dot = this.document.querySelectorAll('.dot');