// Напишите функцию, которая найдет все анаграммы слова из списка.
//  Вам будет предоставлено два входа - слово и массив со словами.
//   Вы должны вернуть массив всех анаграмм или пустой массив,
//    если их нет. Например:
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

function anagrams(word, words) {
    return words.filter(word1 => word1.split('').sort().join('') === word.split('').sort().join('')) 
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));



