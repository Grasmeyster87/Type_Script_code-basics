// Классы
/*
class Point34 {
    x: number;
    y: number;
  
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }
  
  const p = new Point34(10, 20);
  console.log(p); // { x: 10, y: 20 }
*/
// Поле класса
/*
  class Point341 {
    x: number;
  
    y: number;
  
    // Возвращаемый тип не указывается, так как это конструктор
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  
    get inspect(): string {
      return `(${this.x}, ${this.y})`
    }
  }
  
  const p = new Point341(2, 5);
  // Свойство есть, а поля такого нет
  console.log(p.inspect); // (2, 5)*/

/*# Задание

  Реализуйте класс CustomFile, в конструктор которого передается объект с полями: name — именем файла, и size — размером в байтах. Внутри класса определите метод toString(), который должен вернуть форматированную строку в формате <file-name> (<size> bytes).
*/
type CustomFileOptions = {
    name: string;
    size: number;
};
class CustomFile {
    name: string;
    size: number;

    constructor({ name, size }: CustomFileOptions) {
        this.name = name;
        this.size = size;
    }

    toString() {
        return `${this.name} (${this.size} bytes)`;
    }
}

const file = new CustomFile({ name: 'open-world.jpeg', size: 1000 });
console.log(file.toString()); // open-world.jpeg (1000 bytes)
