// Ваша задача - добавить новое свойство
//  usersAnswerк каждому объекту в массиве questions.
//   Значение usersAnswerдолжно быть установлено на null.
//    Решение должно работать для массива любой длины.

// Например:
// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
//     usersAnswer: null
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
//     corAnswer: 0,
//     C: null
// }];



var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

function addUsersAnswer(questions, property, value) {

    return questions.map(question => ({ ...question, [property]: value}))
        
}


questions = addUsersAnswer(questions, 'usersAnswer', null)
  


console.log(addUsersAnswer(questions, 'usersAnswer', null));



// function sumDigits(number) {
//     return String(Math.abs(number)).split('').reduce((total, num) => {
//         return total += Number(num)
//           }, 0)
//   }
//    console.log(sumDigits(-35));




// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
//     usersAnswer: null
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
//     corAnswer: 0,
//     usersAnswer: null
// }];