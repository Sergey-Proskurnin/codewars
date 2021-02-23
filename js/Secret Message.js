function findSecretMessage(paragraph) {
 
    let arr = paragraph.toLowerCase().replace(/\W+/gi, ' ').split(/\s+/)
     
    let arr2 = arr.reduce((acc, el, i) => ({
     ...acc, [el]: acc[el] ? acc[el] + `+${String(i)}` : 1 }),  {})
          
         
     return Object.entries(arr2).filter(el => typeof el[1] === 'string')
     .map(el => `${el[0]},${el[1].slice(2,4)}`.replace(/[+]/gi, '').split(','))
     .sort((a, b) => (a[1] - b[1]))
     .map(el => el[0])
     .join(' ')
     // what's the message?
    // return arr4.join(' ')
   }


//    function findSecretMessage(paragraph) {
//     return paragraph.toLowerCase().split(/\W+/).filter(function(word, i, words) {
//       return words.indexOf(word, words.indexOf(word) + 1) == i;
//     }).join(' ');
//   }

      var paragraph = 'This is a test. this test is fun.';
      console.log(findSecretMessage(paragraph)) //'this test is';
    