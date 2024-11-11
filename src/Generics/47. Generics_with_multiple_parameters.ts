
// Дженерики с несколькими параметрами

type Double<T, U> = {
    first: T;
    second: U;
}

const value47: Double <string, number> = {
    first: 'code-basics',
    second: 1,
}

/*
Вывод типа из аргументов функции

Представим, что нам нужно вызвать функцию с несколькими параметрами. 

Аргументы представлены дженериками.

*/

function join<T, U>(coll1: (T | U)[], coll2: U[]): (T | U)[] {
    return coll1.concat(coll2);
  };
  
  join<number, string>([1, 2], ['one', 'two']); // [1, 2, 'one', 'two']

  join([1, 2], ['one', 'two']); // [1, 2, 'one', 'two']

/*

Задание

Реализуйте описание обобщенного типа MyMap, который представляет из себя аналог ассоциативного массива из JavaScript. 
Пример использования объекта этого типа:

*/

// BEGIN
/*
type MyMap<K, V> = {
    values: Map<K, V>;
    set(key: K, value: V): void;
    get(key: K): V | undefined;
  };
  // END

const map: MyMap<string, number> ;
map.set('one', 1);
map.set('two', 2);

map.get('one'); // 1
map.get('two'); // 2
*/
