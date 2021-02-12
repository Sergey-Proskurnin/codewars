// Ваша команда пишет новый модный текстовый редактор,
//  и вам было поручено реализовать нумерацию строк.
// Напишите функцию, которая принимает список строк и
//  возвращает каждую строку с правильным номером.
// Нумерация начинается с 1. Формат n: string. Обратите
//  внимание на двоеточие и пробел между ними.
// Примеры:
// number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

function  number(array) {

    return array.map((num, index) => `${index + 1}: ${num}`) 
    //your awesome code here
  }

  console.log(number(["a", "b", "c"]));
