// Напишите функцию, которая принимает строку из одного или нескольких
//  слов и возвращает ту же строку, но с перевернутыми словами из пяти
//   или более букв (точно так же, как имя этого Ката). Переданные строки
//    будут состоять только из букв и пробелов. Пробелы будут включены, только
//     если присутствует более одного слова.

// Примеры:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"

// spinWords( "This is a test") => returns "This is a test"

// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(str) {
  return str
    .split(' ')
    .map(word => (word.length >= 5 ? [...word].reverse().join('') : word))
    .join(' ');
  //
  //TODO Have fun :)
}

console.log(spinWords('Welcome')); //; , "emocleW");
console.log(spinWords('Hey fellow warriors')); //; , "Hey wollef sroirraw");
console.log(spinWords('This is a test')); //; , "This is a test");
console.log(spinWords('This is another test')); //; , "This is rehtona test");
console.log(spinWords('You are almost to the last test')); //; , "You are tsomla to the last test");
console.log(spinWords('Just kidding there is still one more')); //; , "Just gniddik ereht is llits one more");
console.log(spinWords('Seriously this is the last one')); //; , "ylsuoireS this is the last one");
