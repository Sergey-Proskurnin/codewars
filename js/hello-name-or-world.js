// Определите метод, helloкоторый returns«Привет, Имя!»
//  к заданному nameили говорит Hello, World! если имя не
//   указано (или передано как пустая строка).

// Предполагая, что nameэто a, Stringи он проверяет наличие
//  опечаток пользователя, чтобы вернуть имя с первой заглавной
//   буквой (Xxxx).

// Примеры:

// hello "john"   => "Hello, John!"
// hello "aliCE"  => "Hello, Alice!"
// hello          => "Hello, World!" # name not given
// hello ""       => "Hello, World!" # name is an empty String

function hello(name) {
 
    return name === undefined || name === '' ? 'Hello, World!' : `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!` 
  }

  console.log(hello('johN')) //'Hello, John!', "returns 'Hello, John!' when given 'johN'")
console.log(hello('alice')) //'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'")
console.log(hello()) //'Hello, World!', "returns 'Hello, World!' when name is not given")
console.log(hello('')) //'Hello, World!', "returns 'Hello, World!' when name is an empty String" )