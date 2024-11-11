
// Введение в дженерики

type arr44 = number| string | boolean;

const merge = (coll1: arr44 [], coll2: arr44 []) => {
    const result = [];
    result.push(...coll1);
    result.push(...coll2);
    return result;
  };

  // function merge<T>(coll1: T[], coll2: T[]): T[]
function merge44_1<T>(coll1: Array<T>, coll2: Array<T>): Array<T> {
    // Тело функции не поменялось!
    const result = [];
    result.push(...coll1);
    result.push(...coll2);
    return result;
  }
  
  merge([1, 2], [3, 4]); // [1, 2, 3, 4]
  merge(['one', 'two'], ['three']); // ['one', 'two', 'three']

  /*
  Дженерики в применении к функциям — это механизм, позволяющий создать такие функции, 
  которые имеют одинаковую логику обработки для разных типов данных. Иногда такие функции называют обобщенными функциями.
  */

  function first<T>(coll: Array<T>): T | null {
    return coll.length > 0 ? coll[0] : null;
  }
  
  first([]); // null
  first([3, 2]); // 3
  first(['code-basics', 'hexlet']); // code-basics
  /*
  Задание

   Реализуйте дженерик last(), который извлекает последний элемент 
   из массива если он есть или null — если его нет:
   */
   function last44<T>(coll: Array<T>): T | null {
    return coll.length > 0 ? coll[coll.length-1] : null;
  }
  console.log(
    last44([]), // null
    last44([3, 2]), // 2
    last44(['code-basics', 'hexlet']), // hexlet
  );