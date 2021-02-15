// Пит любит печь пирожные. У него есть рецепты и ингредиенты.
//  К сожалению, он плохо разбирается в математике. Можете ли вы
//   помочь ему узнать, сколько тортов он мог испечь по его рецептам?

// Напишите функцию cakes(), которая принимает рецепт (объект) и
//  доступные ингредиенты (также объект) и возвращает максимальное
//   количество тортов, которое Пит может испечь (целое число). Для простоты
//    не существует единиц измерения количества (например, 1 фунт муки или 200
//      г сахара - это просто 1 или 200). Ингредиенты, которых нет в предметах,
//       можно рассматривать как 0.

// Примеры:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 

function cakes(recipe, available) {
    let recipeArr = Object.entries(recipe)
    let availableArr = Object.entries(available)
    let av = Object.keys(available)
    return Math.min(...recipeArr.map(el =>
  av.includes(el[0])
   ? Math.floor(availableArr[av.indexOf(el[0])][1] / recipeArr[recipeArr.indexOf(el)][1])
   : 0 )
   )               
    // TODO: insert code
  }