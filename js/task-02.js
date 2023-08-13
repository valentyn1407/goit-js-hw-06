const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listElement = document.querySelector('#ingredients');

ingredients.forEach((ingredient) => {
  const itemElement = document.createElement('li');

  itemElement.textContent = ingredient;
  itemElement.classList.add('item');

  listElement.appendChild(itemElement)
})
