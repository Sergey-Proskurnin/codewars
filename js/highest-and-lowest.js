// В этом небольшом задании вам дается строка
//  чисел, разделенных пробелами, и вы должны возвращать
//   наибольшее и наименьшее числа.

// highAndLow('1 2 3 4 5'); // return "5 1"
// highAndLow('1 2 -3 4 5'); // return "5 -3"
// highAndLow('1 9 3 4 -5'); // return "9 -5"

// function highAndLow(numbers) {
// let numbersArrey = [];
//   let stringArrey = numbers.split(' ');
// //   console.log(numbersArrey);
// //   let bigNumber = numbersArrey[0];
// // //   let litleNumber = numbersArrey[0];
//   for (let number of stringArrey) {
//     // number = (Number(number));
//     numbersArrey.push(Number(number));
//     // console.log(numbersArrey);

// //       bigNumber = number;
// //       console.log(bigNumber = number);
// //     }
// //     // if (litleNumber > number) {
// //     //   litleNumber = number;
// //     // }
//   }
// // return number
// return `${Math.max(...numbersArrey)} ${Math.min(...numbersArrey)}`;
// //   return `${bigNumber} `;
//   //${litleNumber} ...
// }
// console.log(highAndLow('1 2 3 4 5'));
// console.log(highAndLow('1 2 -3 4 5'));
// console.log(highAndLow('1 9 3 4 -5'));
// console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));

function position(letter){
  let stringAbc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
return stringAbc.indexOf(letter) + 1;//Write your own Code!
}
console.log(position("f"));
[a-z]
// "Position of alphabet: 1");