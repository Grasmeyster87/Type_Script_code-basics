// Литералы (Literal Types)

/*
Для решения этой задачи TypeScript поддерживает литеральный тип. 
Они представляют множество, состоящее только из одного элемента. 
Они доступны только для следующих типов: string, boolean, number и BigInt:

*/
/*
type Hexlet = 'hexlet';
type One = 1;
type False = false;
type BigN = 100n;

type TestValue = 'test';
let test: TestValue = 'test';
*/
//test = 'string'; // Error: Type '"string"' is not assignable to type '"test"'.

/*
Объединение литеральных типов

Используя объединение типов, мы можем получить тип, который принимает только нужные нам значения:

*/

//type OrderStatus = 'Created' | 'Paid' | 'Shiped' | 'Delivered';

//type NumberFalse = number | false;
/*
enum OrderStatus {
    Created = 'Created',
    Paid = 'Paid',
    Shipped = 'Shipped',
    Delivered = 'Delivered',
  }
    */
/*
  const dataSourceConfig = {
    type: 'postgre', // может также быть mysql
    host: 'localhost',
    port: 5432,
  };

  

//const AppDataSource = new DataSource(dataSourceConfig);
/*
type DataSourceOption = {
    type: 'postgre' | 'mysql';
    host: string;
    port: number;
  }
*/
/*
Реализуйте функцию makeTurn(), которая принимает строку left или right и перемещает черепашку вперед-назад 
по одномерному массиву фиксированного размера с пятью элементами. Если черепашка выходит за пределы массива, 
то выбрасывается исключение.
*/

type Turtle = 'turtle' | null;

type Game = {
    makeTurn: (direction: 'left' | 'right') => void;
    state: Array<Turtle>;
};

const startGame = (): Game => {
    const state: Array<Turtle> = ['turtle', null, null, null, null];

    // BEGIN (write your solution here)
    const makeTurn = (direction: 'left' | 'right'): void => {
        const turtleIndex = state.indexOf('turtle');
        const nextIndex =
            direction === 'left' ? turtleIndex - 1 : turtleIndex + 1;

        if (nextIndex < 0 || nextIndex > 4) {
            throw new Error('Out of bounds');
        }

        state[turtleIndex] = null;
        state[nextIndex] = 'turtle';
    };
    // END

    return { makeTurn, state };
};

const { makeTurn, state } = startGame();
console.log(state); // ['turtle', null, null, null, null]

makeTurn('left'); // ERROR

makeTurn('right');
makeTurn('right');
console.log(state); // [null, null, 'turtle', null, null]
