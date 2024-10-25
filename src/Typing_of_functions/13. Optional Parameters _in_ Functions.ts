// Опциональные параметры в функциях

function split(str: string, separator?: string) {}
/*
В таком случае реальный тип переменной separator будет string | undefined (string или undefined).

Другой вариант задать опциональный параметр — присвоить значение по умолчанию:
*/
// Знака вопроса больше нет, так как есть значение по умолчанию
/*
function split1(str: string, separator: string = ',') {
  // ...
}

split('hexlet');
split('hexlet,code-basics', ',');

// Колбек функции

// Необязательный параметр index

function filter(coll: number[], callback: (arg: number, index?: number) => boolean) {
    const result: number[] = [];
    coll.forEach((n, index) => {
      // Здесь он передается в колбек
      if (callback(n, index)) {
        result.push(n);
      }
    });
    return result;
  }
    */

function map(
    arr: number[],
    callback: (n: number, index?: any) => number
): number[] {
    let res: number[] = [];
    res = arr.map(callback);
    return res;
}

map([3, 9], (n) => n - 3);
console.log(map([3, 9], (n) => n - 3));
// [0, 6]

map([8, 9], (n) => n + 8);
console.log(map([8, 9], (n) => n + 8));
// [16, 17]
map([8, 9], (n, index) => index + n);
console.log(map([8, 9], (n, index) => index + n));
// [8, 10]

/*
function map(numbers: number[], callback: (n: number, index: number) => number): number[] {
  const result: number[] = [];
  numbers.forEach((n, index) => result.push(callback(n, index)));
  return result;
}
  */
