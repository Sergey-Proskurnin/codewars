// Простой шифр подстановки заменяет один символ из алфавита
//  на символ из альтернативного алфавита, где позиция каждого
//   символа в алфавите отображается в альтернативный алфавит
//    для кодирования или декодирования.

// Например

var abc1 = 'abcdefghijklmnopqrstuvwxyz';
var abc2 = 'etaoinshrdlucmfwypvbgkjqxz';

// var sub = new SubstitutionCipher(abc1, abc2);
// sub.encode("abc") // => "eta"
// sub.encode("xyz") // => "qxz"
// sub.encode("aeiou") // => "eirfg"

// sub.decode("eta") // => "abc"
// sub.decode("qxz") // => "xyz"
// sub.decode("eirfg") // => "aeiou"

// **Неработает если в куске есть символы не из алфавита*/
// function SubstitutionCipher(abc1, abc2) {
//   let aBc1 = abc1.split('');
//   let aBc2 = abc2.split('');
//   SubstitutionCipher.encode = function (str) {
//     return str
//       .split('')
//       .map(el => aBc1.indexOf(el))
//       .map(el1 => aBc2[el1])
//       .join('');
//   };

//   //...

//   SubstitutionCipher.decode = function (str) {
//     return str
//       .split('')
//       .map(el => aBc2.indexOf(el))
//       .map(el1 => aBc1[el1])
//       .join('');
//     //...
//   };
// }

const SubstitutionCipher = function(abc1, abc2) {
  let aBc1 = [...abc1];
  let aBc2 = [...abc2];
  
SubstitutionCipher.encode = function (str) {
    return [...str]
      .map(el => (aBc1.includes(el) ? aBc2[aBc1.indexOf(el)] : el))
      .join('');
  };

  //...

  SubstitutionCipher.decode = function (str) {
    return str
      .split('')
      .map(el => (aBc2.includes(el) ? aBc1[aBc2.indexOf(el)] : el))
      .join('');
    //...
  };
}

SubstitutionCipher(abc1, abc2);
console.log(SubstitutionCipher.encode('abc'));
console.log(SubstitutionCipher.decode('eta'));
