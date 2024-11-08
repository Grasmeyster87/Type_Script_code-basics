
// Реализация интерфейсов классами

/*
В TypeScript классы могут тесно взаимодействовать с интерфейсами. 
В этом уроке мы разберем, как расширять интерфейсы с помощью классов и как создавать классы на основе интерфейсов.

Расширение интерфейса классами

interface IBeep {
  sayBeep: () => string;
}

interface IBoop {
  sayBoop: () => string;
}

class Robo implements IBeep, IBoop {
  sayBeep = () => 'beep';

  sayBoop = () => 'boop';
}

const R2D2 = new Robo();
R2D2.sayBeep(); // 'beep'

Здесь мы расширили два интерфейса с помощью класса, который унаследовал все методы данных интерфейсов. 
Унаследованные методы нам пришлось прописать вручную.

Создание классов на основе интерфейсов

Мы можем создавать классы на основе интерфейсов так же, как мы создаем интерфейсы на основе интерфейсов. Но есть и отличия.

Если мы создаем интерфейс или тип и потом транспилируем TypeScript в JavaScript, то в коде не останется образца этого интерфейса. 
В то же время при создании класса его образец всегда переносится и в JavaScript при транспиляции.

Получается, что вариант с интерфейсами более легковесный, но все же выбор должен зависеть от задачи, которую мы решаем.

Создание класса на основе интерфейса не ведет к точной реализации этого интерфейса в классе. 
TypeScript просто проверяет, удовлетворяют ли свойства и методы нашего класса свойствам, заявленным в интерфейсе. 
Сам же класс мы пишем вручную. 

interface ICalculate {
  sum: (num1: number, num2: number ) => number;
}

class Summator implements ICalculate {
  sum(num1, num2) { return num1 + num2; }
  // Для параметров будет выведено сообщение: Parameter 'num1'/'num2' implicitly has an 'any' type,
  // потому что TypeScript только проверяет класс на соответствие интерфейсу, но не наследуется от него полноценно

  multiply(num1: number, num2: number) { return num1 * num2; }
  // Мы добавили новый метод, но TypeScript не ругается
}

let calculator = new Summator();
  // Наш код сработает, как если бы он сработал для аргументов с типом any,
  // потому что типы параметров, равно как и все остальное, не были унаследованы классом при реализации интерфейса
calculator.sum(2,3) // 5

interface ICalculate {
  sum: (num1: number, num2: number) => number;
  multiply? : (num1: number, num2: number) => number;
}

class Summator implements ICalculate {
  sum (num1: number, num2: number) { return num1 + num2; }
}

const calculator = new Summator();
calculator.sum(2,3) // 5
calculator.multiply(2,3) // Property 'multiply' does not exist on type 'Summator'.

В примере выше мы указали только метод sum при реализации интерфейса классом Summator. В результате код успешно скомпилировался, ведь метод multiply был указан как опциональный. В то же время в экземпляре нашего класса мы не можем обратиться к этому методу.
Выводы

Поскольку в TypeScript для одних и тех же вещей существует несколько разных инструментов, 
мы можем реализовывать классы с помощью расширения абстрактных классов вместо интерфейсов. 
Но выбор будет зависеть от задачи. 
Абстрактные классы предоставляют нам модификаторы доступа и конструкторы, 
в то время как интерфейсы более легковесны и просты.

*/
/*
Задание

С помощью предоставленного интерфейса IPhonebook и типа Entry реализуйте класс Phonebook, который представляет телефонный справочник со следующими свойствами:

    entries — база данных, объект, записи в котором представляют собой имена в качестве ключей и телефоны в качестве значений. Свойство должно быть неизменяемым и доступным только для чтения
    get — метод, возвращающий телефон по имени
    set — метод, записывающий имя и телефон в справочник
*/
    type Entry = {
      [key: string]: number
    };
    
    interface IPhonebook {
      get(key: string): number | null
      set(key: string, value: number): void
    }
    
    // BEGIN (write your solution here)
    class Phonebook implements IPhonebook {
      private data: Entry = {};
    
      public get entries(): Readonly<Entry> {
        return this.data;
      }
    
      get(key: string): number | null {
        if (this.data[key]) {
          return this.data[key];
        } else {
          return null;
        }
      };
    
      set(key: string, value: number): void {
        this.data[key] = value;
      };
    }
    // END
Примеры:
//typescript
const myNote = new Phonebook();
myNote.set('help', 911);
myNote.get('help'); // 911