// Кортежи (Tuples)

/*
Использование кортежей

У кортежей есть свой синтаксис определения. Например, рассмотрим представление точки:

const point: [number, number] = [1, 3]
// Можно поменять
const point[0] = 4;

// Обращение к несуществующему индексу приведет к ошибке
point[3]; // Error!

// Нельзя создать не совпадающий по типу
const point2: [number, number] = [1, 'x']; // Error!


Так как кортежи имеют фиксированное количество элементов, было бы логично, 
если бы такое же поведение применялось к push() или pop(). 
Ведь если мы определили кортеж из двух элементов, то элементов должно быть именно два.

На практике код ниже сработает:

point.push(10);
console.log(point); // [4, 3, 10];

Кортежи могут состоять из элементов разных типов:

type HTTPResponse = [number, string];

// Порядок определения важен
const response: HTTPResponse = [404, 'Page is not found'];
// Так не сработает ['Page is not found', 404]

type HTTPResponse = [number, string?];

const response1: HTTPResponse = [500];
const response2: HTTPResponse = [201, 'Created'];

Если создавать переменные для кортежей и использовать псевдоним, то его нужно указывать явно. 
Иначе с точки зрения TypeScript будет создан обычный массив:

// Будет иметь тип (string | number)[]
const response = [201, 'Created'];

*/

type Point = [number, number, number];

function isTheSamePoint(p1: Point, p2: Point): boolean {
  return p1.every((el, i) => el === p2[i]);
}


const p1: Point = [1, 3, 4];
const p2: Point = [1, 3, 4];
const p3: Point = [0, 8, 4];

isTheSamePoint(p1, p2); // true
isTheSamePoint(p1, p3); // false
isTheSamePoint(p2, p3); // false