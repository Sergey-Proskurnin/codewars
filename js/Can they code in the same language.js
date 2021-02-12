// Вам будет предоставлен массив объектов
//  (ассоциативные массивы в PHP), представляющий
//   данные о разработчиках, которые подписались
//    на следующую встречу по кодированию, которую вы организуете.
// Ваша задача вернуть либо:
// true если все разработчики в списке используют один
//  и тот же язык; или же
// false иначе.
// Например, учитывая следующий входной массив:

var list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
  ];
  
  var list2 = [
    { firstName: 'Mariami', lastName: 'G.', country: 'Georgia', continent: 'Europe', age: 29, language: 'Python' },
    { firstName: 'Mia', lastName: 'H.', country: 'Germany', continent: 'Europe', age: 39, language: 'Ruby' },
    { firstName: 'Maria', lastName: 'I.', country: 'Greece', continent: 'Europe', age: 32, language: 'C' },
  ];
  
  function isSameLanguage(list) {
  return list.every((element) => list[0].language === element.language) 
    // thank you for checking out the Coding Meetup kata :)
  }

  console.log(isSameLanguage(list2));
