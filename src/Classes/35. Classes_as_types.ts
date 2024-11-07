// 35 Классы как типы
/*
class Point35 {
    x: number;
  
    y: number;
  
    constructor(x: number, y: number) {
      this.x = x;
  
      this.y = y;
    }
  }
  
  function isEqual(p1: Point35, p2: Point35): boolean {
    return p1.x === p2.x && p1.y === p2.y;
  }

  class Point {
  private x: number;

  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  isEqual(p2: Point): boolean {
    return this.x === p2.x && this.y === p2.y;
  }
}

const point = new Point(1, 2);
point.isEqual(new Point(10, 1)); // OK
point.isEqual({ x: 1, y: 2}); // Error: Argument of type '{ x: number; y: number; }' is not assignable to parameter of type 'Point'.

*/
/*
Реализуйте класс CustomFile, в конструктор которого передается имя файла и размер в байтах или другой файл. 
Внутри класса определите метод toString(), который должен вернуть форматированную строку в формате (copy) <file-name> (<size> bytes). (copy) 
должно выводиться только в том случае, если файл является копией другого файла.
*/
// BEGIN
type OptionName = string;
type OptionSize = number;
type CustomFileOptions2 = { name: OptionName, size: OptionSize };

class CustomFile2 {
  name: OptionName;

  size: OptionSize;

  private isCopy: boolean;

  constructor(options: CustomFileOptions2) {
    this.name = options.name;
    this.size = options.size;
    this.isCopy = (options instanceof CustomFile2);
  }

  toString(): string {
    const copyString = this.isCopy ? '(copy) ' : '';
    return `${copyString}${this.name} (${this.size} bytes)`;
  }
}
// END


const file1 = new CustomFile2({ name: 'open-world.jpeg', size: 1000 });  
console.log(file1.toString()); // open-world.jpeg (1000 bytes)

const file2 = new CustomFile2(file1);
console.log(file2.toString()); // (copy) open-world.jpeg (1000 bytes)

const file3 = new CustomFile2(file2);
console.log(file3.toString()); // (copy) open-world.jpeg (1000 bytes)
