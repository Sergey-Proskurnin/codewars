// Задача
// Вы только что переехали на совершенно прямую улицу
//  с абсолютно nодинаковыми домами по обе стороны от дороги.
//   Естественно, вы хотите узнать количество домов людей на другой
//    стороне улицы. Улица выглядит примерно так:

// улица
// 1|   |6
// 3|   |4
// 5|   |2
// Эвены увеличиваются справа; шансы снижаются слева. Номера домов
//  начинаются 1и увеличиваются без пропусков. Когда n = 3, 1противоположно 6,
//   3противоположно 4и 5противоположно 2.

// function overTheRoad(address, n){
//    let arr = []
//    for (let i = 1; i <= n * 2; i++) {
//        arr.push(i)
//    } 
//    let arr1 = [...arr].filter(el => el % 2 !== 0)
//    let arr2 = [...arr].filter(el => el % 2 === 0).reverse()
// //    console.log(arr1.indexOf(address));
// return address % 2 !== 0 ? arr2[arr1.indexOf(address)] : arr1[arr2.indexOf(address)]
   
   
    //code here
//   }

  function overTheRoad(address, n) {
    let total = n * 2
    let opposit = address - 1
    return total - opposit 
  }



  console.log(overTheRoad(1,3)) //6;
console.log(overTheRoad(3,3)) //4;
 console.log(overTheRoad(2,3))//5;
console.log(overTheRoad(3,5)) //8;
console.log(overTheRoad(7,11)) //16;
 console.log(overTheRoad(23633656673,310027696726))//  596421736780;