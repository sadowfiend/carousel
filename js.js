const left = document.querySelector('.btnLeft');
const right = document.querySelector('.btnRight');

const slider = document.querySelector('.carousel__slide');
const images = document.querySelectorAll('img');

let counter = 0;
const stepSize = images[0].clientWidth;

slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;

right.addEventListener('click',() =>{
    if (counter >= images.length -1) counter = -1;
    counter++;
    slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
    slider.classList.add('transformAnim');
});
left.addEventListener('click',() =>{
    if (counter <= 0) counter = images.length;
    counter--;
    slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
    slider.classList.add('transformAnim');
});
