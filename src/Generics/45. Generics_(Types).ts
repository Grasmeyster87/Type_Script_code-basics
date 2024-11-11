// Дженерики (Типы)

const numbers451: Array<number> = [];
numbers451.push(1);
type MyColl = {
    data: Array<number>;
    forEach(
        call: (value: number, index: number, array: Array<number>) => void
    ): void;
    at(index: number): number | undefined;
};
/*
Здесь мы видим, что данные коллекции хранятся в числовом массиве. 
При этом в типе определено два метода, один из которых (forEach) передает элементы коллекции в колбек, 
а другой (at) возвращает элементы коллекции по указанному индексу. 
Одна из возможных реализаций этого типа может выглядеть так:

// Типы можно не прописывать, так как они указаны в `MyColl`
const coll: MyColl = {
  data: [1, 3, 8],
  forEach(callback) {
    this.data.forEach(callback);
  },
  at(index) {
    return this.data.at(index); // target >= ES2022
  },
}

coll.at(-1); // 8
*/

/*
Теперь попробуем обобщить этот тип, то есть сделать из него дженерик. 
Для этого нужно сделать одну простую вещь: для элементов коллекции вместо number написать T 
(или любое другое имя, начинающееся с большой буквы) и добавить T как параметр типа к определению:
*/

type MyColl453<T> = {
    data: Array<T>;
    forEach(callback: (value: T, index: number, array: Array<T>) => void):void;
    at(index:number): T | undefined;
}

// Ограничения дженериков
/*
interface HasId {
    id: number;
  }
  
  type MyColl<T extends HasId | number> = {
    data: Array<T>;
    forEach(callback: (value: T, index: number, array: Array<T>) => void): void;
    at(index: number): T | undefined;
  }

  const coll: MyColl<number> = {
  data: [1, 3, 8],
  forEach(callback) {
    this.data.forEach(callback);
  },
  at(index) {
    return this.data.at(index); // target >= ES2022
  },
}

  */
/*
Задание

Реализуйте описание обобщенного типа MySet, который представляет из себя аналог множества Set из JavaScript. 
Пример использования объекта этого типа:
*/

// BEGIN
/*
type MySet<T> = {
    items: Array<T>;
    has(value: T): boolean;
    add(value: T): number;
  };
  // END
  const s: MySet<number>;
// Добавление возвращает количество элементов
s.add(1); // 1
s.add(10); // 2

s.has(1); // true
s.has(8); // false
*/