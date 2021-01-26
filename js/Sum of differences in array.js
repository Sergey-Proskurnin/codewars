// 

  function sumOfDifferences(arr) {
      console.log(Math.max(...arr));

       return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
    }

       

console.log(sumOfDifferences([-1, -2, -10]));
// -11 -10 -12 -1 = -1 2 -11

// Test.describe("sumOfDifferences([1, 2, 10]", function() {
//     Test.assertEquals(sumOfDifferences([1, 2, 10]), 9);
//   });

//   Test.describe("sumOfDifferences([-3, -2, -1])", function() {
//     Test.assertEquals(sumOfDifferences([-3, -2, -1]), 2);
//   });
