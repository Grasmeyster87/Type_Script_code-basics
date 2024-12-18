
// Тип object
/*
Иногда нам нужно ограничить входной параметр функции типом «любой объект». 
Например, это нужно для функции, которая проверяет наличие ключей в объекте. 
Существует несколько способов сделать такую проверку, но не все из них работают как ожидается.

Посмотрим на пример:
*/

// В качестве типа используется {}
function toString(obj: {}) {
  return obj.toString();
}

toString('wow'); // Ok!
toString(123); // Ok!
toString({}); // Ok!

/*
Пустой объектный тип {} подразумевает под собой объект любой структуры и ограничивает множество всех значений 

за исключением null и undefined. Пустой интерфейс работает так же, как и пустой объектный тип. Это не то, что мы ожидали.

Тип Object — это тип объекта. Он работает так же, как тип {} с некоторыми отличиями. 

Он предопределяет типы некоторых встроенных методов, например, toString(), а тип {} этого не делает. Например:

Второе определение bar не работает, потому что тип Object указывает на то, что метод toString() должен возвращать строку.

Если мы хотим работать с непримитивными значениями, то для этого существует еще один тип object (с маленькой буквы):
*/
function toString(obj: object) {
  return obj.toString();
}

toString('wow'); // Error!
toString(123); // Error!
toString({}); // Ok!

/*
Задание

Реализуйте функцию extract(object, keys), которая возвращает новый объект c указанными ключами. Например:
*/

function extract<T extends object, K extends keyof T>(object: T, keys: K[]): Pick<T, K> {
    return keys.reduce((accumulator, key) => {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        accumulator[key] = object[key];
      }
      return accumulator;
    }, {} as Pick<T, K>);
  }

const user50 = {
  name: 'Tirion',
  email: 'tirion@lanister.got',
  age: 35,
}

extract(user50, ['name', 'age']); // { name: 'Tirion', age: 35 }

/*
// BEGIN
const extract = (obj: object, keys: Array<string>): object => {
  const entries = Object.entries(obj).filter(([key]) => keys.includes(key));

  return Object.fromEntries(entries);
};
// END
*/