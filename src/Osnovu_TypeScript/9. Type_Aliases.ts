// Псевдонимы типов (Type Aliases)

// Задаем псевдоним типа

type User = {
    firstName: string;
    pointsCount: number;
};

//Теперь можно провести замену во всех функциях:
/*
function doSomething(user: User) {
  // ...
}
  */
const user10 = {
    firstName: 'Mike',
    pointsCount: 1000,
};

// Оба вызова работают
//doSomething(user10);
//doSomething({ firstName: 'Bob', pointsCount: 1800 });

// Типы можно задавать для любых типов данных, например, для простых:

type SomeType1 = string;

//А также для составных:

// union тип из трех возможных значений
type SomeType2 = string | number | null;

// Функция
type Countable = (coll: number[]) => number;

type User2 = {
    firstName: string;
    pointsCount: number;
    count(coll: number[]): number;
};

type User3 = {
    firstName: string;
    pointsCount: number;
    // Типы взяты для примера
    count(coll: (v: string) => string): number;
};

type User4 = {
    name: string;
    age: number;
};

function getOlderUser(user11: User4, user12: User4) {
    if (user11.age > user12.age) {
        return user11;
    } else if(user11.age == user12.age){
        return null;
    } else {
        return user12;
    }
}

/*
type User = {
  name: string,
  age: number,
};

function getOlderUser(user1: User, user2: User): User | null {
  if (user1.age > user2.age) {
    return user1;
  }
  if (user2.age > user1.age) {
    return user2;
  }

  return null;
}
  */
