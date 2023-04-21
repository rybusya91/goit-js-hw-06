const categoriesEl = document.querySelectorAll('.item');

console.log('Number of categories: ${categoriesEl.length}');



// const cotegoryEl = document.querySelector(`ul#categories .item`);
// const listTitle = document.querySelector(".item");
// const listItemEl = listTitle.lastElementChild;

categoriesEl.forEach(listEl => {
    console.log('');
    console.log(`Category: ${listEl.firstElementChild.textContent}`);

    console.log(`Elements: ${listEl.LastElementChild.querySelectorAll('li').length}`,
    );
});