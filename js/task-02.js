const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listElement = document.querySelector('#ingredients');

const items = ingredients.map(ingredient =>
  `<li class="item">${ingredient}</li>`).join('');
listElement.innerHTML = items;
