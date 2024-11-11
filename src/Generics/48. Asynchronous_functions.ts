
// Асинхронные функции

/*
Promise стали самым популярным способом работы с асинхронным кодом в JavaScript. Они позволяют избежать callback hell, 
а также упрощают работу с асинхронными функциями. TypeScript также поддерживает привычный синтаксис для работы с Promise 
в виде async/await и типизацию.

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(42);
  }, 1000);
});

Чтобы продолжать работать в одном стиле с функциями, которые принимают callback, мы можем промисифцировать их. 
Для этого нам нужно обернуть функцию в Promise:

const wait = (ms: number): Promise<number> => {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}

*/
/*
Задание

Реализуйте асинхронный вариант функции map() - asyncMap(). 
Первым аргументом asyncMap() принимает массив с Promise. 
Вторым — функцию, которая применяется к каждому элементу. 
Функция должна вернуть массив с результатами выполнения функции для каждого элемента:
*/
// BEGIN
const asyncMap = async <T, P>(arr: Promise<T>[], fn: (item: T, index: number) => P) => {
    const promises = arr.map(async (item, index) => {
      const result = await item;
      return fn(result, index);
    });
  
    return Promise.all(promises);
  };
  // END

const promisedNumbers = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

asyncMap(promisedNumbers, (num, index) => num * index).then((result) => {
  console.log(result); // [0, 2, 6]
});
