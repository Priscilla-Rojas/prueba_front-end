const containerSlider = document.querySelector(".container-slider");
const slider = document.querySelector(".slider");
const sliderSection = document.querySelectorAll(".slider__section");
const silderSectionLast = sliderSection[sliderSection.length -1];
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
let automatic; 

function moverDerecha() {
    let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.5s';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = '-100%';
    }, 500)
}
function moverIzquierda() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let silderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', silderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}
btnRight.addEventListener('click', ()=>{
    moverDerecha();
});
btnLeft.addEventListener('click', ()=>{
    moverIzquierda();
});
btnRight.addEventListener('mouseover', ()=>{
    clearInterval(automatic);
});
btnLeft.addEventListener('mouseover', ()=>{
    clearInterval(automatic);
});
slider.addEventListener('mouseleave',()=>{
    automatic = setInterval(()=>{
        moverDerecha();
    }, 3000);
})
slider.addEventListener('mouseover',()=>{
    clearInterval(automatic);
});
window.addEventListener("load", ()=>{
    containerSlider.classList.add("desvanecer");
});
window.addEventListener("scroll", ()=>{
    let animation = document.querySelector(".info-vacuna > h2");
    let positionObject = animation.getBoundingClientRect().top;
    // console.log(positionObject);
    let tamañoWindow = window.innerHeight/3;

    if(positionObject < tamañoWindow){
        animation.classList.add("desvanecer");
    }
});
window.addEventListener("scroll", ()=>{
    let violet= document.querySelector('.violet');
    let positionObject = violet.getBoundingClientRect().top;
    // console.log(positionObject);
    let tamañoWindow = window.innerHeight/3;

    if(positionObject < tamañoWindow){
        violet.classList.add("entradaIzquierda");
    }
});
window.addEventListener("scroll", ()=>{
    let ligthBlue= document.querySelector('.ligth-blue');
    let positionObject = ligthBlue.getBoundingClientRect().top;
    // console.log(positionObject);
    let tamañoWindow = window.innerHeight/3;

    if(positionObject < tamañoWindow){
        ligthBlue.classList.add("entradaDerecha");
    }
});
window.addEventListener("scroll", ()=>{
    let boy= document.querySelector('.boy');
    let positionObject = boy.getBoundingClientRect().top;
    // console.log(positionObject);
    let tamañoWindow = window.innerHeight/3;

    if(positionObject < tamañoWindow){
        boy.classList.add("volar");
    }
    // console.log(window.scrollY)
});
window.addEventListener("scroll", ()=>{
    let girl= document.querySelector('.girl');
    let positionObject = girl.getBoundingClientRect().top;
    console.log(positionObject);
    let tamañoWindow = window.innerHeight/2;
    if(positionObject < tamañoWindow){
        girl.classList.add("entradaDerecha");
    }
});
