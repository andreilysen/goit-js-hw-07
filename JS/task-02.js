const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientUl = document.querySelector('#ingredients')

ingredients.forEach(function (ingredient) {
    const ingredientEl = document.createElement('li')
    ingredientEl.textContent = `${ingredient}`
    ingredientUl.appendChild(ingredientEl)
})