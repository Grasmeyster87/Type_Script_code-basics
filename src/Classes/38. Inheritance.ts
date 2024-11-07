//  Наследование

/*

В этом уроке мы разберем наследование. 
Это механизм, который позволяет создавать подклассы на основе уже существующих классов. 
Подклассы наследуют свойства и методы родительского класса и могут расширять их.

*/
/*
В TypeScript наследование реализуется с помощью ключевого слова extends:

// В TypeScript уже включен класс File, поэтому определим свой класс файла с именем CustomFile
class CustomFile {
  constructor(public name: string, public size: number) {}
}

class ImageCustomFile extends CustomFile {
  constructor(name: string, size: number, public width: number, public height: number) {
    super(name, size);
  }
}
*/
class HttpError extends Error {
    constructor(public status: number, message: string) {
      super(message);
    }
  }
  
  class NotFoundError extends HttpError {
    constructor(message: string) {
      super(404, message);
    }
  }
  
  class UnauthorizedError extends HttpError {
    constructor(message: string) {
      super(401, message);
    }
  }
  
  class ForbiddenError extends HttpError {
    constructor(message: string) {
      super(403, message);
    }
  }

  

const error38 = new NotFoundError('Not Found');
console.log(error38.status); // 404
console.log(error38.message); // Not Found