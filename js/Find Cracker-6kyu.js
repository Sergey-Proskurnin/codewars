// Someone was hacking the score. Each student's record is given
// as an array The objects in the array are given again as an array of scores for each name and total score.ex >

const array = [
  ['name1', 445, ['B', 'A', 'A', 'C', 'A', 'A']],
  ['name2', 110, ['B', 'A', 'A', 'A']],
  ['name3', 200, ['B', 'A', 'A', 'C']],
  ['name4', 200, ['A', 'A', 'A', 'A', 'A', 'A', 'A']],
];
// The scores for each grade is:

// A: 30 points
// B: 20 points
// C: 10 points
// D: 5 points
// Everything else: 0 points
// If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

// Returns the name of the hacked name as an array when scoring with this rule.

// var array = [
// ["name1", 445, ["B", "A", "A", "C", "A", "A"]], // name1 total point is over 200 => hacked
// ["name2", 110, ["B", "A", "A", "A"]], //  name2 point is right
// ["name3", 200, ["B", "A", "A", "C"]], // name3 point is 200 but real point is 90 => hacked
// ,
// ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]] // name4 point is right
// ];

// return ["name1", "name3"];

function findHack(arr) {
  const obj = {
    A: 30,
    B: 20,
    C: 10,
    D: 5,
  };
  // -------Deep copy------------
  function arrayClone(arr) {
    let i, copy;

    if (Array.isArray(arr)) {
      copy = arr.slice(0);
      for (i = 0; i < copy.length; i++) {
        copy[i] = arrayClone(copy[i]);
      }
      return copy;
    } else if (typeof arr === 'object') {
      throw 'Cannot clone array containing an object!';
    } else {
      return arr;
    }
  }
  //   const arr1 = arrayClone(arr)

  // ------------- Deep copy check--------------
  //   const array =  arr1.map(el => [el[0], el[1],
  //                         el[2] = (el[2].length > 4)
  //                        && (el[2].filter(elm => !"AB".includes(elm)).length === 0)
  //                           ?[...el[2], ..."B"]
  //                           :el[2]])
  //   .map(el => [el[0], el[1],  el[2].reduce((acc, e) => {
  //     acc +=obj[e]
  //        return acc >200 ?200 :acc}, 0)])

  //   console.log(array)

  return arrayClone(arr)
    .map(el => [
      el[0],
      el[1],
      (el[2] =
        el[2].length > 4 &&
        el[2].filter(elm => !'AB'.includes(elm)).length === 0
          ? [...el[2], ...'B']
          : el[2]),
    ])
    .map(el => [
      el[0],
      el[1],
      el[2].reduce((acc, e) => {
        acc = obj[e] ? acc + obj[e] : acc;
        return acc > 200 ? 200 : acc;
      }, 0),
    ])
    .filter(el => el[1] !== el[2])
    .map(el => el[0]);
}

console.log(findHack(array)); //Value deep equals ["name1", "name3"]
console.log(
  findHack([
    ['Bill Webb', 300, ['B', 'C', 'C', 'H', 'B']],
    ['Kabin Black', 30, ['F', 'B', 'C', 'F']],
    ['John Black', 45, ['H', 'A', 'C', 'D']],
    ['John Watts', 45, ['H', 'D', 'H', 'B', 'E']],
    ['Jane Webb', 5, ['E', 'G', 'F', 'D', 'E']],
    ['Jane Lawrence', 50, ['B', 'H', 'C', 'E', 'F', 'B']],
    ['John Webb', 45, ['F', 'C', 'D', 'D', 'D', 'F']],
    ['Doe Lawrence', 70, ['D', 'D', 'B', 'B', 'G', 'B']],
    ['Bill Lawrence', 5, ['G', 'G', 'H', 'F', 'G', 'D']],
    ['John Lawrence', 60, ['B', 'H', 'G', 'B']],
    ['Jane Watts', 55, ['B', 'E', 'D', 'E', 'E', 'A']],
    ['Doe Black', 60, ['F', 'B', 'B', 'G', 'B']],
    ['Jack Black', 45, ['H', 'C', 'C', 'H', 'D']],
    ['Jane Lawrence', 300, ['G', 'C', 'E', 'G', 'G']],
    ['John Webb', 75, ['D', 'G', 'F', 'A', 'B']],
  ]),
); // Value deep equals ['Bill Webb', 'John Watts', 'John Webb',
//'John Lawrence', 'Jack Black', 'Jane Lawrence', 'John Webb']
console.log(
  findHack([
    ['Doe Webb', 35, ['H', 'A', 'D', 'G']],
    ['Kabin Black', 45, ['G', 'B', 'G', 'D']],
    ['Jack Webb', 50, ['C', 'C', 'E', 'A']],
    ['Bill Lawrence', 55, ['E', 'B', 'H', 'D', 'A']],
    ['Kabin Bradley', 20, ['D', 'G', 'C', 'E', 'D', 'G']],
    ['Bill Black', 50, ['E', 'C', 'F', 'B', 'B', 'F']],
    ['Jane Watts', 30, ['G', 'G', 'E', 'B', 'D', 'D']],
    ['Jack Lawrence', 30, ['E', 'H', 'C', 'B', 'G']],
    ['Doe Webb', 20, ['F', 'E', 'B', 'G', 'G']],
    ['Bill Black', 20, ['D', 'H', 'C', 'D']],
  ]),
); //Value deep equals ['Kabin Black']
