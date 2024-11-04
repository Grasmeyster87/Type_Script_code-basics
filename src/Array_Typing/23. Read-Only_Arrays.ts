// Массивы только для чтения

// В TypeScript работа с неизменяемыми массивами встроена в систему типов. 
// Чтобы гарантировать неизменяемость, массив помечается модификатором readonly:

/*
function process(numbers: readonly number[]) {
  numbers.push(1); // Error!
}

Модификатор readonly запрещает изменение массива, но не запрещает изменение объектов, которые находятся внутри массива:

const items: readonly ({ key: string })[] = [{ key: 'value'}];
items[0].key = 'another value'; // ok!

const items: ReadonlyArray<{ key: string }> = [{ key: 'value'}];
*/

function reverse(coll: readonly number[]): number[] {
    return coll.map((_, index) => coll[coll.length - 1 - index]);
  }