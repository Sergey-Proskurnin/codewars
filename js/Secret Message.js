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

      
// function findSecretMessage(paragraph) {
//     let arr1 = []
//     let arr = paragraph.toLowerCase().split('.').join('').trim().split(' ')
//     let arr2 = arr.reduce((acc, el) => {
//        return acc.includes(el) ?  [...arr1, el] : [...acc, el]
//   }, [])
//     arr2.splice(arr2.length - 1, 1)
//       let arr4 = arr2.reduce((acc, el) => {
//        return acc.includes(el) ? acc : [...acc, el]
//   }, [])
//     return arr4.join(' ')
//     // what's the message?
//    // return arr4.join(' ')
//   }
  
//   // console.log(findSecretMessage('This is a test. this test is fun.'));
  
//   console.log(findSecretMessage('CUkps ixsjcf uvxyz snwguy dbeqy uazh nekzl hetde taqvnw jhsk gephjq otks mcracxl lzqfxc zdbd pruq ppzt eukend uuej hfgqmss xhpz lrpwzos vfldvkw hiln rjym opeqlz pgchyoz lpna tlltlh cpym hnznnt mjfduv ebyn eyuk shpzz fospvi mqsros idlurt pdrmt azguhp zmypij csjm hshb ikee flvpoe qphzr naduagg enerest gslxegg iiapi mxjq vccd szqx zvrzz wfisn svwdbt ikhjkt wvzc pkchzg znnd lomwmf rkar vgmat jprin yagvqh iypo sfzkj uykk jrxs orrlf bqxr rlbjzwx dqszzt cfvnx ervqo ncyjtkl yhxh qgwtwpq wnvhf'));
    