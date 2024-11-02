// Деструктуризация

// Обычное определение
/*
const f = (user) => {
    console.log(user.firstName, user.age);
  };
  
  // Деструктурированный объект
  const f = ({ firstName, age }) => {
    console.log(firstName, age);
  };
  
  const user = { firstName: 'Smith', age: 30 };
  f(user); // => 'Smith', 30

  // Деструктурированный объект визуально похож на параметры функции. При этом он все равно остается объектом, поэтому в TypeScript его тип описывается после закрывающей фигурной скобки:

// Обычное определение
function f(user: { firstName: string, age: number }) {
  console.log(user.firstName, user.age);
}

// Деструктурированный объект
function f({ firstName, age }: { firstName: string, age: number }) {
  console.log(firstName, age);
}

Здесь мы описали тип объекта внутри параметра функции и сразу же деструктурировали его.

Если вынести определение типа в псевдоним, то можно сделать код поменьше:

type User = {
  firstName: string;
  age: number;
}

function foo({ firstName, age }: User) {
  console.log(firstName, age);
}

Этот же тип User можно будет использовать и в других местах.

То же самое применимо и к массивам:

// Обычное определение
function foo(point: number[]) {
  console.log(point);
}

// Деструктурированный массив
function foo([x, y]: number[]) {
  console.log(x, y);
}

type Point = number[];

// С псевдонимом
function foo([x, y]: Point) {
  console.log(x, y);
}

*/


function lessonsCount({lesson}:{lesson: string[]}):number{
return lesson.length ;
};

const course17 = { lesson: ['intro', 'lala'] };
lessonsCount(course17); // 2