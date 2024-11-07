
// Статические методы и свойства

/*

Иногда нам требуется задать свойство или метод, который будет общим для всех экземпляров этого класса. 
Например, чтобы определить, является ли объект экземпляром класса. 
В таком случае при объявлении метода мы можем указать ключевое слово static, 
и он станет доступен через имя класса:

class CustomFile {
  private static readonly maxCustomFileSize = 1000;

  static isCustomFile(file: CustomFile): boolean {
    return file instanceof CustomFile;
  }

  protected static isCustomFileTooBig(size: number): boolean {
    return size > CustomFile.maxCustomFileSize;
  }

  constructor(private name: string, private size: number) {
    if (CustomFile.isCustomFileTooBig(size)) {
      throw new Error('CustomFile is too big');
    }
  }
}

CustomFile.isCustomFile(new CustomFile('open-world.jpeg', 1000)); // true

Статическим методам и свойствам также можно назначить модификаторы доступа public, protected и private 
и модификатор неизменяемости readonly. 
Это позволяет ограничить использование свойств и методов только текущим классом или наследниками.

В отличии от JavaScript в TypeScript статические свойства и методы не могут быть переопределены в подклассах
*/


/*
Задание

Другое полезное применение статических свойств и методов — создание фабричных методов. 
Фабричный метод — это статический метод, который возвращает новый экземпляр класса. 
Реализуйте класс UserResponse с полем user: string и фабричный метод fromArray, 
который принимает массив и возвращает массив экземпляров класса UserResponse:

*/
/*
class UserResponse {
  constructor(public user: string) {}

  static fromArray(arr: string[]): UserResponse[] {
    return arr.map(user => new UserResponse(user));
  }
}
*/
class UserResponse {
    constructor(public user: string) {}
  
    static fromArray(users: string[]): UserResponse[] {
      return users.map((user) => new UserResponse(user));
    }
  }

const response = UserResponse.fromArray(['user1', 'user2', 'user3']);
console.log(response[0].user); // user1
console.log(response[0] instanceof UserResponse); // true
