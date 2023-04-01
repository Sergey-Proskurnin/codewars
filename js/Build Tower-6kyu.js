// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]
// Go challenge Build Tower Advanced once you have finished this :)

function towerBuilder(nFloors) {
  return [...Array(nFloors * 2)]
    .map((_, i) => ++i)
    .filter(el => el % 2 !== 0)
    .map((el, _, arr) => {
      const n =
        arr[arr.length - 1] - el === 0
          ? ''
          : ' '.repeat((arr[arr.length - 1] - el) / 2);
      return n + '*'.repeat(el) + n;
    });
}

console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));
