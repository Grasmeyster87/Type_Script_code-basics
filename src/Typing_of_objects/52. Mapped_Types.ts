// Сопоставление типов (Mapped Types)

interface Person {
    name: string;
    age: number;
    location?: {
        country: string;
        city: string;
    };
}

interface PersonDetails {
    location: Person['location'];
}
/*
  Lookup Types позволяет также получить объединение типов из объекта по нескольким известным ключам, объединенным с помощью вертикальной черты |:

type User = {
  id: number;
  name: string;
  email: string;
}

type UserFields = User['id' | 'name' | 'email']; // string | number

Чтобы получить объединение всех ключей из объекта, мы можем использовать оператор keyof.

Упростим наш пример:

type User = {
  id: number;
  name: string;
  email: string;
}

type UserFields = User[keyof User]; // string | number

Чтобы не дублировать полностью все поля одного объектного типа, в другом используются вспомогательные типы:

    Pick<Type, Keys> — создает объектный тип с ключами Keys из Type
    Omit<Type, Keys> — создает объектный тип, из которого исключаются ключи Keys из Type

interface Person {
  name: string;
  age: number;
  location?: string;
}

const details: Pick<Person, 'name' | 'age'> = {
  name: 'John',
  age: 42,
};

const details2: Omit<Person, 'location'> = {
  name: 'John',
  age: 42,
};

В этом примере тип, полученный в результате Pick<Person, 'name' | 'age'> и Omit<Person, 'location'>, будет одним и тем же.

Все Utility Types в TypeScript написаны при помощи встроенных конструкций. Мы уже изучили достаточно концепций TypeScript, 
чтобы начать с ними разбираться. Поэтому мы можем задаться вопросом, как они реализованы. 

Рассмотрим, как реализован тип Pick:

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

Pick<T, K> — дженерик тип с двумя параметрами: T и K. На K мы также наложили ограничение extends keyof T. 
Это означает, что K должно содержать перечисление ключей из T.

Оператор in здесь работает таким же образом, как в обычных циклах: выполняется перебор по всем элементам перечисления. 
В примере выше происходит перебор всех элементов в K. На каждой итерации P будет содержать текущий элемент из K. 
Каждый такой элемент P становится ключом, а для значения мы ищем подходящий тип в объектном типе T[P].

Операторы keyof (Lookup Types) и in (Mapped Types) часто идут рядом. 
С помощью keyof мы получаем доступ ко всем именам свойств объектного типа, 
а благодаря in можем циклически пройти по всем свойствам. 
Эти операции являются ключевыми при создании своих вспомогательных типов при работе с объектными типами данных.

*/

/*
Реализуйте функцию sanitize(), которая принимает на вход объект и массив ключей. 
Также она должна возвращать новый объект, но уже без указанных полей.
*/
/*
const sanitize = <T extends object, K extends keyof T>(obj: T, keys: Array<K>) => {
    const entries = Object.entries(obj).filter(([key]) => !keys.includes(key as K));
  
    return Object.fromEntries(entries) as Omit<T, K>;
  };


const user52 = sanitize({
  name: 'John',
  password: '1q2w3e',
  token: 'test',
}, ['password', 'token']); // { name: string }

console.log(user52); // => { name: 'John' }
*/
//Обратите внимание, что в выходном типе также не должно быть этих полей.