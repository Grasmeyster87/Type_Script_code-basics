
/* 
Использование интерфейсов
Расширение интерфейса дополнительными полями

Если интерфейс необходимо расширить дополнительными полями после его инициализации, 
мы можем повторно объявить интерфейс с новыми свойствами. 
Такой способ называется слиянием деклараций

*/
/*
interface  IUser42 {
    rating: number;
}

interface IUser42 {
    nickname: string;
    birthdate:number;
}

const sergey: IUser42 = {
    nickname: 'Sergey',
    birthdate: 1990,
    rating: 1102,
}

*/

/*
Расширение интерфейса с помощью другого интерфейса

Мы можем расширить интерфейс с помощью создания другого интерфейса, который наследуется от него:

interface IStudent extends IUser {
  group: number;
}

const sergey: IStudent = {
  nickname: 'Sergey',
  birthdate: 1990,
  rating: 1102,
  group: 2,
}


Расширение нескольких интерфейсов

Еще интерфейсы могут расширять сразу несколько других интерфейсов:

interface IUser {
  nickname: string;
  rating: number;
}

interface IEditor {
  courses: [string];
  canEdit: boolean;
}

interface IAuthor extends IUser, IEditor {
  team: string;
}

const sergey: IAuthor = {
  nickname: 'Sergey',
  rating: 20,
  courses: ['typescript'],
  canEdit: true,
  team: 'Hexlet College'
}


Создание intersection types

Также TypeScript позволяет нам создавать перекрестные типы (intersection types) из нескольких интерфейсов 
c помощью литерала &:

interface IOneWay {
  one: string;
}

interface IOrAnother {
  another: string;
}

type OneWayOrAnother = IOneWay & IOrAnother;

const example: OneWayOrAnother = {
  one: 'A',
  another: 'B',
}


Может случиться так, что мы не знаем заранее всех свойств, которые будут содержаться в нашем интерфейсе. 
Но нам известно их возможное содержание. В таком случае удобно использовать специальную индексную сигнатуру, 
которая позволяет описать типы возможных значений:

interface IPhoneBook {
  [index:string]: number;
}

const myNotePad: IPhoneBook = {
  ivan: 55531311,
  sergey: 55500110,
  mom: 55522111,
}

В примере выше мы решили вопрос создания телефонной книги с помощью индексной сигнатуры. 
Это позволило нам не указывать множество свойств с именами, но лишь один раз указать тип ключа 
и тип его значения.

*/
/*
Задание

Вам даны несколько интерфейсов. На их основе создайте интерфейс ISuperman. 
ISuperMan должен иметь метод guessWho, принимающий и возвращающий строку.

На основе интерфейса ISuperMan создайте объект superMan. 
Метод guessWho должен работать следующим образом: если в качестве строки в аргументе приходит 
любое значение кроме superman (в любом регистре), то следует вернуть предположение "It's a ${value}?", 
иначе "It's a ${value}!".
*/

interface IFlying {
    canFly: true;
  }
  
  interface IBird extends IFlying {
    isLiving: true;
  }
  
  interface IPlane extends IFlying {
    canCarryPeople: true;
  }
  
  // BEGIN (write your solution here)
  interface ISuperMan extends IBird, IPlane {
    guessWho: (guess: string) => string;
  }

  const superMan: ISuperMan = {
    canFly: true,
    isLiving: true,
    canCarryPeople: true,
    guessWho: (guess) => (guess.toLowerCase() !== 'superman' ? `It's a ${guess}?` : `It's a ${guess}!`),
  };
  // END



console.log(superMan.guessWho('bird')); // "It's a bird?";
console.log(superMan.guessWho('plane')); "It's a plane?";
console.log(superMan.guessWho('superman')); "It's a superman!";