const buttons = document.querySelectorAll('button')
const valueEl = document.querySelector('#value')
const btnDecr = buttons[0]
const btnIncr = buttons[1]

let counterValue = 0
updateDisplay();

function updateDisplay(){
    valueEl.textContent = counterValue;
};

btnIncr.addEventListener("click",()=>{
    counterValue+=1;
    updateDisplay();
}) ;

btnDecr.addEventListener("click",()=>{
    counterValue-=1;
    updateDisplay();
});