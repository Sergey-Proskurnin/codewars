// Представьте, что вы начинаете с 5-го этажа здания,
//  затем спускаетесь на 2-й этаж, а затем снова поднимаетесь
//   на 8-й этаж. Вы прошли 3 + 6 = 9 этажей расстояния.
// Учитывая массив, представляющий серию этажей, до которых
//  вы должны добраться на лифте, верните целое число,
//   представляющее общее расстояние, пройденное для посещения
//    каждого этажа в массиве по порядку.

// // simple examples
// elevatorDistance([5,2,8]) = 9
// elevatorDistance([1,2,3]) = 2
// elevatorDistance([7,1,7,1]) = 18

// // if two consecutive floors are the same,
// //distance travelled between them is 0
// elevatorDistance([3,3]) = 0

function elevatorDistance(array) {
    return array.reduce((total, num, i) => {
        if (i < array.length - 1) { 
            console.log(Math.abs(array[i] - array[i + 1]));
        total += Math.abs(array[i] - array[i + 1])
        }
        return total
    }, 0)
    // your code here
  }

  console.log(elevatorDistance([5,2,8]));