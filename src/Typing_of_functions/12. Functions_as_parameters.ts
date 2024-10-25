function process(callback: Function) {
    const value = callback();
}

function process1(callback: () => string) {
    // value имеет тип string
    const value = callback();
    // ...
}

//process1(Math.round);
// Argument of type '(x: number) => number' is not
// assignable to parameter of type '() => string'.

function process3(callback: () => number) {}
function process4(callback: () => string[]) {}
function process5(callback: () => { firstName: string }) {}

function process6(callback: (n: number) => string) {
    const value = callback(10);
    // ...
}

//Если определение функции встречается часто, то для него можно создать псевдоним:

type myFunction = (n: number) => string;

function process7(callback: myFunction) {
    const value = callback(10);
    // ...
}

function filter(
    arrnumbers: number[],
    callback: (n: number) => boolean
): number[] {
    console.log(arrnumbers.filter(callback));
    return arrnumbers.filter(callback);
}

const numbers12 = [1, -5, 2, 3, 4, 133];

filter(numbers12, (n) => n > 3); // [4, 133]
filter(numbers12, (n) => n % 2 == 0); // [2, 4]

/*
function filter(numbers: number[], callback: (n: number) => boolean): number[] {
  const result: number[] = [];
  numbers.forEach((n) => {
    if (callback(n)) {
      result.push(n);
    }
  });
  return result;
}
  */
