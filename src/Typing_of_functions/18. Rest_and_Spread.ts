// Rest и Spread

// Rest-оператор

// Rest-оператор позволяет создавать функции с переменным числом параметров, при этом сворачивать их в массив:

function max18(...numbers: number[]): number {
  return Math.max(...numbers);
}

// Spread-оператор

// Spread-оператор в функциях — это как rest-оператор наоборот. Он позволяет раскладывать массив на отдельные параметры:

const numbers18 = [1, 2, 3];
Math.max(...numbers18);

// Type Assertion — указание компилятору, что мы точно знаем о коде:
/* 
function sum(a: number, b: number): number {
    return a + b;
  }
   */
  // Выведенный тип number[] — "ноль или больше чисел",
  // а не "массив из двух чисел"
  //const args = [1, 2];
  //sum(...args);
  // A spread argument must either have a tuple type
  // or be passed to a rest parameter.

const args = [1, 2] as const;

function max(value: number, ...numbers: number[]): number {
    return Math.max(value, ...numbers);
  }
  
max(1,2,3);
max(234);