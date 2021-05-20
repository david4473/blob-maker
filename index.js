//Query slecetors

const slider = document.querySelectorAll('input');
const pop = document.querySelectorAll('.pop');
const range = document.querySelector('.range');
const box = document.querySelector('.box');

//Pushing every pop class into an array

const arr = [];

pop.forEach((pop) => {
    arr.push(pop);
})


// slider functions


let value = slider.value;

slider.forEach((slider, index) =>{

    if (index === 0) {

        slider.oninput = () => {
            let value = slider.value;
            pop[0].textContent = value ;
            pop[0].style.left = (value / 1) + '%';
            pop[0].classList.add('show');
            box.style.borderTopRightRadius = value + '%';
        }

        slider.onblur = () =>{
            pop[0].classList.remove('show');
        }

    }else if (index === 1) {

        slider.oninput = () => {
            let value = slider.value;
            pop[1].textContent = value ;
            pop[1].style.left = (value / 1) + '%';
            pop[1].classList.add('show');
            box.style.borderTopLeftRadius = value + '%';
        }

        slider.onblur = () =>{
            pop[1].classList.remove('show');
        }

    }else if (index === 2) {
        slider.oninput = () => {
            let value = slider.value;
            pop[2].textContent = value ;
            pop[2].style.left = (value / 1) + '%';
            pop[2].classList.add('show');
            box.style.borderBottomLeftRadius = value + '%';
        }

        slider.onblur = () =>{
            pop[2].classList.remove('show');
        }

    }else{

        slider.oninput = () => {
            let value = slider.value;
            pop[3].textContent = value ;
            pop[3].style.left = (value / 1) + '%';
            pop[3].classList.add('show');
            box.style.borderBottomRightRadius = value + '%';
        }

        slider.onblur = () =>{
            pop[3].classList.remove('show');
        }
    }

    
})

const check = getComputedStyle(box);
check.borderBottomRightRadius;
console.log(check);

