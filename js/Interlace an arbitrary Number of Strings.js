function combineStrings(...str) {
    //  let a ='',b= '',c=''
    // return str.reduce( ( acc, el, i, arr) => {
    //  a += el[0]
    //  b += el[1]
    //  c += el[2]
    //  return acc = a+b+c
    //  }, '')
    //  return str.join(', ')
    
    let a = []
    return str.reduce( ( acc, el, i, arr) => {
    // while (el.length <= 0){
       let arr1 = el.split('')
    a.push(arr.shift()) 
    console.log(arr1);
    //    continue
    // }
      //   
     return a
     }, '')
      
      }

        console.log(combineStrings('abc', '123'))//;(, 'a1b2c3');
//Test.assertEquals(combineStrings('abcd', '123'), 'a1b2c3d');
//Test.assertEquals(combineStrings('abcd', '123', '£$%'), 'a1£b2$c3%d');