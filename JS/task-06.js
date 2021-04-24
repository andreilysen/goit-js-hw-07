// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте,
//     указывается в его атрибуте data - length.
// Если введено подходящее количество, то border инпута становится зеленым,
//     если неправильное - красным.


const input = document.getElementById("validation-input")

const validLength = input.dataset.length

const validInputLength = function (event) {   
    if (event.currentTarget.value.length === validLength) {
      
       return input.classList.add('valid')
    }
    else {
        // return input.classList.toggle('invalid')
    }
}
//  console.log(input.currentTarget.value.length)



input.addEventListener('blur', validInputLength)

