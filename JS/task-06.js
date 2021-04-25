const input = document.getElementById("validation-input")

// const validLength = input.dataset.length

const validInputLength = function (event) {   
    if (event.currentTarget.value.length === 6) {      
        input.classList.add('valid')
        // input.classList.remove('invalid')
    }
    if (event.currentTarget.value.length !== 6) {
         input.classList.add('invalid')
        // input.classList.remove('valid')
    }
     if (event.currentTarget.value.length === 0) {
         input.classList.remove('invalid')
        input.classList.remove('valid')
    }
}
//  console.log(input.currentTarget.value.length)

input.addEventListener('blur', validInputLength)