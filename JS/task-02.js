const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientUl = document.querySelector('#ingredients');
const itemList = ingredients.map(function (ingredient) {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = ingredient;
  return ingredientEl;
});
console.log(itemList);

ingredientUl.append(...itemList);
