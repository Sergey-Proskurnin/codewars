// Напишите простой метод .camelCase ( camel_caseфункция в PHP,
//      CamelCaseC # или camelCaseJava) для строк. Все слова должны
//       начинаться с заглавной буквы без пробелов.

// Например:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Не забудьте оценить это ката! Спасибо :)

const camelCase = function(str) {

    return str.split(' ').map(el =>  el === '' ? ''  : el[0].toUpperCase() + el.slice(1)).join('')
        
    
    //your code here
  }

console.log(camelCase("test case")); //, "TestCase");
console.log(camelCase("camel case method")); //, "CamelCaseMethod");
console.log(camelCase("say hello ")); //, "SayHello");
console.log(camelCase(" camel case word")); //, "CamelCaseWord");
console.log(camelCase("")); //, "");