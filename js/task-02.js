const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector(`ul#ingredients`);

const ingredientsArr = ingredients.map(ingredient => {
  const liEl = document.createElement(`li`);
  liEl.textContent = ingredient;
  liEl.classList.add(`item`);

  return liEl;

});

ulEl.append(...ingredientsArr);

console.log(ulEl);
