// Given a lowercase string that has alphabetic characters only and no spaces,
// return the highest value of consonant substrings.Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// --The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22.
// The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// --The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57
// and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
// For C: do not mutate input.

// More examples in test cases. Good luck!

//-------Refactoring--------------------
// const solve = s =>
//   Math.max(
//     ...s.split(/[aeiou]/).map(el => {
//       return el.split('').reduce((acc, e) => (acc += e.charCodeAt() - 96), 0);
//     }),
//   );

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
function solve(s) {
  const vowels = 'aeiou';

  return getMaxOfArray(
    s
      .split('')
      .map(el => (vowels.includes(el) ? ' ' : el))
      .join('')
      .split(' ')
      .map(el => {
        if (el === '') {
          return 0;
        }
        return el.split('').reduce((acc, e) => (acc += e.charCodeAt() - 96), 0);
      }),
  );
}

console.log(solve('zodiac')); //26
console.log(solve('chruschtschov')); //80
console.log(solve('khrushchev')); //38
console.log(solve('strength')); //57
console.log(solve('catchphrase')); //73
console.log(solve('twelfthstreet')); //103
console.log(solve('mischtschenkoana')); //80
