// Complete the method which returns the number which is most
// frequent in the given input array.If there is a tie for most
// frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr) {
  return Object.entries(
    arr.reduce((acc, el) => ({ ...acc, [el]: acc[el] ? acc[el] + 1 : 1 }), {}),
  )
    .map(el => [+el[0], el[1]])
    .sort((a, b) => b[1] - a[1] || b[0] - a[0])[0][0];
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])); //12
console.log(highestRank([(12, 10, 8, 12, 7, 6, 4, 10, 12, 10)])); // 12
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])); //3
