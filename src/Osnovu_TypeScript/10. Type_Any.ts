// Тип Any

// В таком случае тип будет any[],
// так как TypeScript не может вывести тип содержимого,
// ведь его еще нет
const items = [];
// Можно добавлять все что угодно
items.push(1);
items.push('code-basics');

// Ошибка возникнет только во время запуска js-кода
/*
let value: any = 5;
value.toString(); // ok
//value(); // ok, но будет ошибка при запуске js-кода
value.trim(); // ok, но будет ошибка при запуске js-кода
value = 'wow'; // ok
*/
// Из JavaScript в TypeScript

const sentence = 'table cat table dog dog apple table';

const words = sentence.split(' ');
const initial: any = {}; // Указали тип как any
/*const result = words.reduce((acc, word) => {
    acc[word] = Object.hasOwn(acc, word) ? acc[word] + 1 : 1;
    return acc;
  }, initial);
  */

function getParams(query: string) {
    const parts = query.split('&');
    const init: any = {};    
    const result = parts.reduce((acc, part) => {
        const [key, value] = part.split('=');
        acc[key] = value;
        return acc;
    }, init);
    
    return result;
}
getParams('per=10&page=5');
// { per: '10', page: '5' }
getParams('name=hexlet&count=3&order=asc');
// { name: 'hexlet', count: '3', order: 'asc' }
