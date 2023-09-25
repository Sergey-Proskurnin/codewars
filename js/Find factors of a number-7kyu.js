// Create a function that takes a number and finds the factors of it,
// listing them in descending order in an array.

// If the parameter is not an integer or less than 1, return -1. In C# return an empty array.

// For Example: factors(54) should return [54, 27, 18, 9, 6, 3, 2, 1]
const showNumbers = num => {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return arr.reverse((a, b) => b - a);
};
function factors(x) {
  return x < 1 || Math.floor(x) !== x ? -1 : showNumbers(x);
}

console.log(factors(54)); //[54,27,18,9,6,3,2,1]
console.log(factors(9)); // [9,3,1]
