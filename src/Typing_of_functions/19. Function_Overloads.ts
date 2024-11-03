// Перегрузка функций (Function Overloads)

/*
Перегрузка функций — это возможность определить несколько версий одной функции, 
каждая из которых принимает свой набор параметров. Разберем на примере:
*/

function concat(a: number, b: number): string;
function concat(a: string, b: string): string;

function concat(a: unknown, b: unknown): string {
  if (typeof a === 'number' && typeof b === 'number') {
    return `${a.toFixed()}${b.toFixed()}`;
  }

  return `${a}${b}`;
}

concat('one', 'two'); // onetwo
concat(3, 5.34); // 35
concat(1.33, 10); // 110

/*
Для перегрузки необязательно использовать объявление функций. То же самое можно сделать с помощью стрелочной функции:

const concat: {
  (a: number, b: number): string;
  (a: string, b: string): string;
} = (a: unknown, b: unknown) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return `${a.toFixed()}${b.toFixed()}`;
  }

  return `${a}${b}`;
}

// с использованием псевдонимов
type Overloaded = {
  (a: number, b: number): string;
  (a: string, b: string): string;
}

const concat: Overloaded = (a, b) => {...}

*/

function newYearCongratulate( name: string ):string;
function newYearCongratulate( year:number, name: string ):string;

function newYearCongratulate( value1:string | number, value2?: string ):string {
  if(typeof value1 === 'number'){
    return `Hi ${value2}! Happy New Year ${value1}!`;
  } 
  return `Hi ${value1}! Happy New Year!`  
}

newYearCongratulate('John'); // Hi John! Happy New Year!
newYearCongratulate(2023, 'Mila'); // Hi Mila! Happy New Year 2023!