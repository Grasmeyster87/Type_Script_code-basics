
// Об интерфейсах

/*
Интерфейс — это конструкция языка TypeScript, которая используется, чтобы описывать объекты и функции.

Рассмотрим следующий пример:
*/

interface IUser {
    firstName: string;
    pointCount: number;
}

const user41: IUser = {
    firstName: 'Mark',
    pointCount: 100,
}

/*
В данном фрагменте мы создали интерфейс и реализовали на его основе объект user.

Интерфейс выглядит как определение объектного типа. Объектные типы и интерфейсы взаимозаменяемы почти во всех ситуациях.

Когда использовать интерфейсы

Интерфейсы и типы во многом похожи. Но есть отличия, на основе которых мы и можем выбирать, что именно следует использовать в конкретном случае.

Главная особенность интерфейсов связана с классами. Классы, которые реализуют интерфейсы, содержат внутри себя свойства и методы, указанные в реализуемом интерфейсе:

interface Countable {
  count(): number;
}

class SchoolClass implements Countable {
  // Тут какая-то логика
  count(): number {
    // Обязательно создать этот метод, так как он указан в интерфейсе
  }
}

const sc = new SchoolClass();
// Возвращает число студентов в классе
sc.count();

В этом примере мы реализовали класс на основе интерфейса. Теперь во всех функциях, где объекты используются только для того, чтобы посчитать количество чего-либо внутри них, можно указывать Countable вместо SchoolClass:

// А не function doSomething(obj: SchoolClass)
function doSomething(obj: Countable) {
  // Где-то внутри вызывается
  obj.count();
}

Так благодаря интерфейсам функция становится более универсальной. Мы можем передать любые объекты, соответствующие Countable, а не только SchoolClass. 
В программировании такая возможность называется полиморфизмом подтипов (Subtyping).
*/

interface IVehicle {
    seats: number;
    colour: string;
    canHavePassengers: boolean;
    fuelPer100Kilometers: number;
    calcFuelNeeded(distance:number): number;
  }
  
  // BEGIN
  class Car implements IVehicle {
    constructor(
      public seats: number,
      public colour: string,
      public canHavePassengers: boolean,
      public fuelPer100Kilometers: number,
    ) {}
  
    calcFuelNeeded(distance: number) {
      return (this.fuelPer100Kilometers / 100) * distance;
    }
  }
  // END

  const porche = new Car(4, 'red', true, 20);
console.log(porche.calcFuelNeeded(200)); // 40