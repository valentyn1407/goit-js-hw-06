const categoriesList = document.querySelector('#categories');
const countItemsElements = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${countItemsElements.length}`);

countItemsElements.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    const subCategoriesItems = item.querySelectorAll('ul > li');
    console.log(`Category: ${categoryTitle} 
    elements: ${subCategoriesItems.length}`);
   
});