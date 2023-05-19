// To participate in a prize draw each one gives his/her firstname.

// Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.

// The length of the firstname is added to the sum of these ranks hence a number som.

// An array of random weights is linked to the firstnames and each som is multiplied by its corresponding weight to get what they call a winning number.

// Example:
// names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
// weights: [1, 4, 4, 5, 2, 1]

// PauL -> som = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54
// The *weight* associated with PauL is 2 so PauL's *winning number* is 54 * 2 = 108.
// Now one can sort the firstnames in decreasing order of the winning numbers. When two people have the same winning number sort them alphabetically by their firstnames.

// Task:
// parameters: st a string of firstnames, we an array of weights, n a rank

// return: the firstname of the participant whose rank is n (ranks are numbered from 1)

// Example:
// names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
// weights: [1, 4, 4, 5, 2, 1]
// n: 4

// The function should return: "PauL"
// Notes:
// The weight array is at least as long as the number of names, it may be longer.

// If st is empty return "No participants".

// If n is greater than the number of participants then return "Not enough participants".

// See Examples Test Cases for more examples.
function rank(st, we, n) {
  if (st.length === 0) {
    return 'No participants';
  }
  const array = st.split(',');
  if (n > array.length) {
    return 'Not enough participants';
  }
  const arrayName = array.map((el, i, arr) => {
    const sum =
      el.split('').reduce((acc, e) => {
        acc = acc + e.toLowerCase().charCodeAt(0) - 96;
        return acc;
      }, 0) + el.length;
    return [el, sum * we[i]];
  });
  const sortSumArrayName = [...arrayName].sort((a, b) =>
    a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1],
  );
  return sortSumArrayName[n - 1][0];
}

console.log(
  rank(
    'Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin',
    [4, 2, 1, 4, 3, 1, 2],
    4,
  ),
); //  'Benjamin'

console.log(rank('Lagon,Lily', [1, 5], 2)); //"Lagon"
console.log(
  rank(
    'Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin',
    [4, 2, 1, 4, 3, 1, 2],
    8,
  ),
); //"Not enough participants"
console.log(rank('', [4, 2, 1, 4, 3, 1, 2], 6)); //"No participants"
console.log(
  rank('Elijah,Chloe,Elizabeth,Matthew,Natalie,Jayden', [1, 3, 5, 5, 3, 6], 2),
); //"Matthew"
