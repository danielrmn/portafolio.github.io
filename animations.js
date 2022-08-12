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


// prueba 1 animacion de los skills
// window.addEventListener('scroll', () => {
//     const skillName = document.querySelector('.skill-name');
//     let dot = document.getElementById('dot');
//     let circle2 = document.getElementById('circle2');
//     let position = skillName.getBoundingClientRect().y;
//     console.log(position);
//     let screenSize = window.innerHeight / 2;

//     if (position < screenSize){
//         skillName.style.animation = 'fefeIn 1s linear forwards';
//         circle2.style.animation = 'fefeIn 1s linear forwards';
//         dot.style.animation = 'animateDot 2s linear forwards';
//     }
// })

// prueba 2 animacion de los skills

// function aparenceScroll(){
//     let skills = document.getElementById('skills');
//     const skillName = document.querySelectorAll('.skill-name');

//     document.addEventListener("wheel", function(){
//         let topVent = skills.getBoundingClientRect().y;
//         for(i=0; i < skillName.length; i++){
//             let topskillName = skillName[i].offsetTop;
//             if(topVent > topskillName -400){
//                 console.log(topVent)
//                 skillName[i].style.animation = 'fefeIn 1s linear forwards';
//             }
//         }
//     })
// }
// aparenceScroll();


// prueba 3 animaciones de los skills

// function aparenceScroll(){
//         let skills = document.getElementById('skills');
//         const skillName = document.querySelectorAll('.skill-name');
    
//         document.addEventListener("wheel", function(){
//             let position = skills.getBoundingClientRect().top;
//             for(i=0; i < skillName.length; i++){
//                 let topskillName = skillName[i].offsetTop;
//                 let screenSize = window.innerHeight / 2;
//                 if(position < screenSize){
//                     skillName[i].style.animation = 'fefeIn 1s linear forwards';
//                 }
//             }
//         })
//     }
//     aparenceScroll();

// prueba 4 animacions para los skills 
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


