// Олимпиада пингвинов: катастрофа на гонках по плаванию
// Ситуация...

// Самые быстрые пингвины в мире только что поплыли ради главного
//  приза в профессиональном плавании пингвинов.
// Камеры, которые снимали гонку, прекратили запись на полпути.
// Спортсмены и болельщики в замешательстве ждут результатов.
// Соревнование...

// С учетом последнего записанного кадра гонки и множества
//  спортсменов-пингвинов определите золотые, серебряные и бронзовые
//   медали.

// Правила...

// Предположим, что все пингвины плавают с одинаковой скоростью.
// Волны ( ~) плавают в два раза дольше, чем гладкая вода ( -).
// Пингвины ( pили P) бегут слева направо.
// Дорожек может быть любое количество, а длина гонки может быть любой.
// Все дорожки в одной гонке будут одинаковой длины.
// Имена пингвинов расположены в том же порядке, что и полосы.
// Верните строку в этом формате: "GOLD: <name-1>, SILVER: <name-2>,
//  BRONZE: <name-3>"
// Всегда будет равное количество пингвинов и аллей.
// Всегда будет тройка лучших (ничьих нет).
// Примеры...

// Snapshot:
// |----p---~---------|
// |----p---~~--------|
// |----p---~~~-------|

// Penguins:
// ["Derek", "Francis", "Bob"]

// Expected Output:
// "GOLD: Derek, SILVER: Francis, BRONZE: Bob"
// Snapshot:
// |-~~------------~--P-------|
// |~~--~P------------~-------|
// |--------~-P---------------|
// |--------~-P----~~~--------|

// Penguins:
// ["Joline", "Abigail", "Jane", "Gerry"]

// Expected Output:
// "GOLD: Joline, SILVER: Jane, BRONZE: Gerry"

// function calculateWinners(snapshot, penguins) {
//   let win;
//   let total = snapshot.toLowerCase().split('|').filter((val) => val.trim().length)
//     .map((el, i, arr) => el.slice(arr[i].indexOf('p') + 1))
//     // console.log(total);
//     .map(el2 =>
//       el2.split('').reduce((acc, el1) => {
//         return el1 === '-' ? (acc += 1) : (acc += 2);
//       }, 0),
//     );
// console.log(total);
//   win = Math.min(...total);
//   let gold = penguins[total.indexOf(win)];
//   total.splice(total.indexOf(win), 1, 1000);
//   let second = Math.min(...total);
//   let silver = penguins[total.indexOf(second)];
//   total.splice(total.indexOf(second), 1, 1000);
//   let three = Math.min(...total);
//   let bronze = penguins[total.indexOf(three)];
//   return `GOLD: ${gold}, SILVER: ${silver}, BRONZE: ${bronze}`;
 
 
// }
// // const snapshot = `|----p---~---------| |----p---~~--------| |----P---~~~-------|`;

// // const penguins = ['Derek', 'Francis', 'Bob'];


// // const expected = "GOLD: Derek, SILVER: Francis, BRONZE: Bob";

// const snapshot = `|-~~------------~--P-------|
// |~~--~P------------~-------|
// |--------~-P---------------|
// |--------~-P----~~~--------|`;

//     const penguins = ["Joline", "Abigail", "Jane", "Gerry"];


//     // const expected = "GOLD: Joline, SILVER: Jane, BRONZE: Gerry";
    
//     console.log(calculateWinners(snapshot, penguins));

function findSecretMessage(paragraph) {
  let arr1 = []
  let arr = paragraph.toLowerCase().split('.').join('').trim().split(' ')
  let arr2 = arr.reduce((acc, el) => {
     return acc.includes(el) ?  [...arr1, el] : [...acc, el]
}, [])
  arr2.splice(arr2.length - 1, 1)
    let arr4 = arr2.reduce((acc, el) => {
     return acc.includes(el) ? acc : [...acc, el]
}, [])
  return arr4.join(' ')
  // what's the message?
 // return arr4.join(' ')
}

// console.log(findSecretMessage('This is a test. this test is fun.'));

console.log(findSecretMessage('CUkps ixsjcf uvxyz snwguy dbeqy uazh nekzl hetde taqvnw jhsk gephjq otks mcracxl lzqfxc zdbd pruq ppzt eukend uuej hfgqmss xhpz lrpwzos vfldvkw hiln rjym opeqlz pgchyoz lpna tlltlh cpym hnznnt mjfduv ebyn eyuk shpzz fospvi mqsros idlurt pdrmt azguhp zmypij csjm hshb ikee flvpoe qphzr naduagg enerest gslxegg iiapi mxjq vccd szqx zvrzz wfisn svwdbt ikhjkt wvzc pkchzg znnd lomwmf rkar vgmat jprin yagvqh iypo sfzkj uykk jrxs orrlf bqxr rlbjzwx dqszzt cfvnx ervqo ncyjtkl yhxh qgwtwpq wnvhf'));