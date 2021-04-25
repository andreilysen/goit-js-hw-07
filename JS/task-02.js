const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientUl = document.querySelector('#ingredients');
const itemList = [];
ingredients.forEach(function (ingredient) {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = `${ingredient}`;
  itemList.push(ingredientEl);
});
console.log(itemList);

ingredientUl.append(...itemList);
