// Вам будет предоставлен массив чисел.
// Для каждого числа в массиве вам нужно будет создать объект.
// Ключ объекта будет числом в виде строки. Значением будет соответствующий
//  код символа в виде строки.
// Вернуть массив результирующих объектов.
// Все входы будут массивами чисел. Все коды символов являются допустимыми
//  строчными буквами. Входной массив не будет пустым.

function numObj(s) {
  return s.map(num => ({[num]: String.fromCodePoint(num)}))
    
  
}



console.log(numObj([118,117,120])); //[{'118':'v'}, {'117':'u'}, {'120':'x'}]);
// (numObj([101,121,110,113,113,103]), //[{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'113':'q'}, {'103':'g'}]);