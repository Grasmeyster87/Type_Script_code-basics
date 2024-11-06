
// Иерархия типов
/*
Литеральные типы

Напомним, что литеральные типы существуют для четырех типов данных: boolean, string, number, BigInt. 
В итоге любой литеральный тип можно присвоить переменной соответствующего типа:
*/
let num: number = 1;
const two: 2 = 2;
const notTrue: false = false;

num = two;
//num = notTrue; // Type 'boolean' is not assignable to type 'number'.

let unknownValue: unknown = 1;

unknownValue = 2; // OK
unknownValue = false; // OK
unknownValue = 'string'; // OK

//let unknownValue: unknown;

unknownValue = 'string';
//unknownValue.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'unknown'.

type UnionWithUnknown = unknown | number | boolean;

//never

/*
Иногда на практике нужно быть уверенным, что переменной не будет присвоено никакого значения. 
Это можно реализовать с помощью типа never:
*/

let neverValue: never;
//const two: 2 = 2;

//neverValue = two; // Type 'number' is not assignable to type 'never'

type NumberUnion = -2 | -1 | 1 | 2

const one: NumberUnion = 1;
const num1: number = one;

type StringUnion = 'a' | 'b' | 'c' | 'd'

const aChar: StringUnion = 'a';
const str1: string = aChar;

/*
Такое подмножество типов называют подтипом, а само множество супертипом.

Взаимосвязи подтипов и супертипов — ключевая концепция любого статически типизированного языка. 
Они образуют иерархию типов. Это становится особо важно, когда мы хотим привести один тип к другому.
*/

// Приведение типов

let num11 = 1; // Неявное восходящее приведение
let one11: number = 1; // Явное восходящее приведение

let two11 = num11 as 2; // Явное нисходящее приведение

let three = 3 as const; // Приведение к литеральному типу — нисходящее

/*
Здесь компилятор определяет переменной args как тип number[] — массив с любым количеством числовых элементов. Компилятор расширил возможные значения в массиве, не смотря на то, что мы указали всего два элемента в массиве. Это и есть неявное восходящее приведение типа, когда компилятор приводит к более общему типу.

По этой причине возникает ошибка, потому что метод Math.atan2() ожидает два аргумента, а тип переменной args может содержать любое количество элементов. Исправим это с помощью ключевого слова as:

const args = [8, 5] as const; // readonly [8, 5]
const angle = Math.atan2(...args); // okay
console.log(angle);
*/
type User = {
    id: number,
    name: string,
    age: number,
  };
  
  type Friends = [number, number];
  
  export type UserResponse = {
    users: User[],
    friends: Friends[]
  };

  // BEGIN (write your solution here)
  const defaultUser = { id: 0, name: '', age: 0 };
  const getUserFriends = (userResponseJSON: string, userId: number): User[] => {
    const userResponse = JSON.parse(userResponseJSON) as UserResponse;
  
    return userResponse.friends
      .map(([ownerId, friendId]: Friends): User => {
        if (!(userId === ownerId || userId === friendId)) return defaultUser;
        const searchId = (ownerId === userId) ? friendId : ownerId;
        const friend: User | undefined = userResponse.users.find(({ id }) => id === searchId);
  
        return friend === undefined ? defaultUser : friend;
      })
      .filter((user: User) => user.id > 0);
  };
// END

const userJson = JSON.stringify({
    users: [
      { id: 1, name: 'John', age: 20 },
      { id: 2, name: 'Mary', age: 21 },
    ],
    friends: [
      [1, 2],
    ],
  });
  
  getUserFriends(userJson, 1); // [{ id: 2, name: 'Mary', age: 21 }]
  getUserFriends(userJson, 2); // [{ id: 1, name: 'John', age: 20 }]
  getUserFriends(userJson, 3); // []