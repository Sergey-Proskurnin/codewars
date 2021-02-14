// Remove All The Marked Elements of a List

// l = List()

// integer_list =  [1, 1, 2 ,3 ,1 ,2 ,3 ,4]
// values_list = [1, 3]
// l.remove_(integer_list, values_list) == [2, 2, 4]

// integer_list = [1, 1, 2 ,3 ,1 ,2 ,3 ,4, 4, 3 ,5, 6, 7, 2, 8]
// lst = [1, 3, 4, 2]
// l.remove_(integer_list, values_list) == [5, 6 ,7 ,8]

// integer_list = [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2 , 3]
// lst = [2, 4, 3]
// l.remove_(integer_list, values_list) == [8, 7, 6, 5, 1]

Array.prototype.remove_ = function(integer_list, values_list) {
return integer_list.filter(elment => !values_list.includes(elment))
    //  )
    // for (let el of values_list) {
    // for (let el1 of integer_list)
    // if (el === el1) {
    //     integer_list.splice(integer_list.indexOf(el), 1)
        
    // }
    
// }

//  integer_list
    //your code here
  }

  console.log(Array.prototype.remove_([ 1, 2 ,3 ,1, 1, 2 , 3, 3, 4], [1, 3] ));