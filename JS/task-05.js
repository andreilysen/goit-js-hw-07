const inputEl = document.querySelector('#name-input')
const outputEl = document.querySelector('#name-output')

const inputChange = function (event) {
    if (inputEl.value === '') {
       return outputEl.textContent = 'незнакомец'
    }
    return outputEl.textContent = event.currentTarget.value
}
inputEl.addEventListener('input', inputChange)