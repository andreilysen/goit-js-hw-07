const input = document.getElementById("validation-input");

const validLength = Number(input.dataset.length);

const validInputLength = function (event) {
    if (event.currentTarget.value.length === validLength) {      
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
}
input.addEventListener('blur', validInputLength)