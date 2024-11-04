// 22 Многомерные массивы
/*
const item1 = [
    [3, 8],
    [10, 4, 8],
];

const item2: number[][] = [];

// или так Array<number[]>

type User22 = {
    name: string;
};

// или так Array<User[]>

const users: User22[][] = [[{ name: 'Eva' }, { name: 'Adam' }]];

// Чтобы определить массивы составных типов, нужно использовать скобки:

const coll: (string | number)[][] = [];
coll.push(['hexlet', 5]);

const coll1: Array<Array<string | number>> = [];
coll1.push(['hexlet', 5]);

type Course = {
    name: string;
    lessons: Lesson[];
};

type Lesson = {
    name: string;
    links: string[];
};

*/

function getField(size: number): null[][] {
    const field = Array<null>(size).fill(null).map(() => Array<null>(size).fill(null));
    return field;
  }
const field1 = getField(1);
console.log(field1);
// [[null]]

const field2 = getField(2);
console.log(field2);
// [[null, null], [null, null]]