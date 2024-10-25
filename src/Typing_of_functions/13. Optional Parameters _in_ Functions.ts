
// Опциональные параметры в функциях

function split(str: string, separator?: string) {

}
/*
В таком случае реальный тип переменной separator будет string | undefined (string или undefined).

Другой вариант задать опциональный параметр — присвоить значение по умолчанию:
*/
// Знака вопроса больше нет, так как есть значение по умолчанию
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