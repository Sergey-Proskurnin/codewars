function reverseFizzBuzz(s) {
  let start = 0;
  const arrStr = [];
  let arr1
  let arr = s.trim().split(' ');
  

  if (Number.isNaN(+arr[0])) {
    arr1 = arr.filter(el => !Number.isNaN(+el));
    start = +arr1[0] - arr.indexOf(arr.find(el => !Number.isNaN(+el)));
  }
  if (!Number.isNaN(+arr[0])) {
    start = +arr[0];
  }
  if (arr.filter(el => !Number.isNaN(+el)).length === 0) {

    // start = arr.join('').length + 1;
    
    if (arr[arr.length - 1] === 'Buzz' && arr.length > 1) {
        start = arr.length * 5 - 1
     } 
    if (arr[arr.length - 1] === 'Fizz' && arr. length > 1) {
        start = arr.length * 3 - 1
     }
     if (arr[arr.length - 1] === 'Buzz' && arr.length === 1) {
        start = 5
     }
     if (arr[arr.length - 1] === 'Fizz' && arr.length === 1) {
        start = 3
     }
     if (arr[arr.length - 1] === 'FizzBuzz' && arr.length === 1) {
        start = 15
     }
  
  }

  for (let i = start; i <= arr.length - 1 + start; i++) {
    arrStr.push(i);
  }
  return arrStr;
}

console.log(reverseFizzBuzz('1 2 Fizz 4 Buzz')); //, [1, 2, 3, 4, 5]
console.log(reverseFizzBuzz('Fizz 688 689 FizzBuzz')); //, [687, 688, 689, 690])
console.log(reverseFizzBuzz('Fizz Buzz')); //, [9, 10])

// Expected: [9, 10], instead got: 'Fizz Buzz'
// Expected: [5, 6], instead got: 'Buzz Fizz'
// Expected: [3], instead got: 'Fizz'
// Expected: [5], instead got: 'Buzz'
// Expected: [15], instead got: 'FizzBuzz'