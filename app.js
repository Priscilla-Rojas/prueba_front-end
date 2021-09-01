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
slider.addEventListener('mouseout',()=>{
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
    const titleInfo = document.querySelector(".info-vacuna > h2");
    titleInfo.classList.add("desvanecer", window.scrollY >= 200);
});
window.addEventListener("scroll", ()=>{
    let violet= document.querySelector('.violet');
    violet.classList.add("entradaIzquierda", window.scrollY >= 350);
});
window.addEventListener("scroll", ()=>{
    let ligthBlue= document.querySelector('.ligth-blue');
    ligthBlue.classList.add("entradaDerecha", scrollY >= 400);
});
window.addEventListener("scroll", ()=>{
    let boy= document.querySelector('.boy');
    boy.classList.add("volar", window.scrollY > 1050);
    // console.log(window.scrollY)
});
window.addEventListener("scroll", ()=>{
    let girl= document.querySelector('.girl');
    girl.classList.add("entradaDerecha", window.scrollY > 1500);
    // console.log(window.scrollY)
});
