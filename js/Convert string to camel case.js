// Завершите метод / функцию, чтобы он преобразовывал слова,
//  разделенные тире / подчеркиванием, в верблюжий регистр.
//   Первое слово в выводе должно быть написано с заглавной буквы,
//    только если исходное слово было с заглавной буквы (известное как
//      верхний регистр верблюда, также часто называемый регистром Паскаля).

// Примеры
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str){
    
  let res =  str.replace(/-/gi, ' ').replace(/_/gi, ' ')
    .split(' ').map((el, i = 1, arr) => el === '' ? ''  : arr[i][0].toUpperCase() + el.slice(1)).join('')
if (res !== '' && str[0] === str[0].toLowerCase()) {
    res = res[0].toLowerCase() + res.slice(1) 
}
    return res

}


console.log(toCamelCase(''))//; , //'', "An empty string was provided but not returned")
console.log(toCamelCase("the_stealth_warrior"))//; , //"theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
console.log(toCamelCase("The-Stealth-Warrior"))//; , //"TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
console.log(toCamelCase("A-B-C"))//; , //"ABC", "toCamelCase('A-B-C') did not return correct value")
