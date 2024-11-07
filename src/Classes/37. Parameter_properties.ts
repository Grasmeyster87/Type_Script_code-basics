
// Свойства параметров
/*
Заполнение свойств из параметров конструктора частая задача в работе с классами. 
Поэтому в TypeScript добавили специальный синтаксис, который позволяет делать это автоматически:
*/
/*
class SomeClass {
  constructor(public one: number, private two: string) {}

  get three(): string {
    return `${this.one} ${this.two}`;
  }
}

class SomeClass {
    public one: number;

    private two: string;

    constructor(one: number, two: string) {
      this.one = one;
      this.two = two;
    }

    get three(): string {
        return `${this.one} ${this.two}`;
    }
  }
    */

  class CustomFile37 {
    constructor(private name: string, private size: number) { }
  
    toString() {
      return `${this.name} (${this.size} bytes)`;
    }
  }
  // END
  const file37 = new CustomFile37('open-world.jpeg', 1000);
console.log(file37); // open-world.jpeg (1000 bytes)
