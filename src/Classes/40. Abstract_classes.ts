
// Абстрактные классы
/*
Когда нам нужно определить общее поведение для нескольких классов, удобно использовать абстрактные классы, которые мы разберем в этом уроке.

Абстрактные классы хоть и не могут быть созданы напрямую, однако они могут быть наследованы. Еще они могут указать явно, какой метод должен быть реализован в наследниках:
*/
/*
abstract class CustomFile40 {
  protected name: string;

  protected size: number;

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }

  sizeInKb(): number {
    return this.size / 1024;
  }
}

class ImageCustomFile40 extends CustomFile {
  constructor(name: string, size: number) {
    super(name, size);
  }
}

Чтобы выносить из классов общую часть кода, абстрактные классы активно используются для построения архитектуры приложения и фреймворков. Например, в React есть класс Component, который может быть представлен как абстрактный класс. Мы не можем создать его напрямую, но он требует от наследников реализации метода render. Это позволяет создавать компоненты, которые будут рендериться при инициализации:

abstract class Component {
  abstract render(): void;

  constructor() {
    this.render();
  }
}

*/
/*
Создайте абстрактный класс Clock, который будет содержать общую логику для классов часов с разными форматами вывода времени: 12-часовой и 24-часовой.

В общей логике должно быть хранение данных: часы hours, минуты minutes и секунды seconds. Так же в общую логику входит метод tick(), который при каждом вызове увеличивает секунду на единицу. Если секунда увеличивается до значения 60, то увеличивается минута на 1, а секунда сбрасывается до 0. То же самое с минутами и часами: если значение минут увеличивается до 60, то увеличивается значение текущего часа, а минуты сбрасываются до 0. Если значение часа увеличивается до 24, то происходит сброс этого значения до 0.

Начальное значение времени задается при создании объекта. Первым параметром в конструктор передается текущий час, вторым минуты, третьим секунды.

Абстрактный класс Clock должен требовать от своих наследников реализацию метода render().
*/

abstract class Clock {
    constructor(protected hours: number, protected minutes: number, protected seconds: number) {}
  
    tick(): void {
      this.seconds += 1;
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes += 1;
      }
      if (this.minutes === 60) {
        this.minutes = 0;
        this.hours += 1;
      }
      if (this.hours === 24) {
        this.hours = 0;
      }
    }
  
    abstract render(): string;
  }

  
// 24-часовой формат
/*
class Clock24 extends Clock {
    render(): string {
      const currentHour = this.hours % 24;
      const hours = currentHour.toString().padStart(2, '0');
      const minutes = this.minutes.toString().padStart(2, '0');
  
      return `${hours} : ${minutes}`;
    }
  }
  
  const clock24 = new Clock24(23, 59, 59);
  console.log(clock24.render()); // => '23 : 59'
  clock24.tick();
  console.log(clock24.render()); // => '00 : 00'
  
  // 12-часовой формат
  /*
  class Clock12 extends Clock {
    render(): string {
      const timeType = this.hours > 12 ? 'PM' : 'AM';
  
      let currentHour = this.hours > 12 ? this.hours - 12 : this.hours;
      if (timeType === 'AM' && this.hours === 0) {
        currentHour = 12;
      }
  
      const hours = currentHour.toString().padStart(2, '0');
      const minutes = this.minutes.toString().padStart(2, '0');
      return `${hours} : ${minutes} ${timeType}`;
    }
  }
  
  const clock12 = new Clock12(23, 59, 59);
  console.log(clock12.render()); // => '11 : 59 PM'
  clock12.tick();
  console.log(clock12.render()); // => '12 : 00 AM'
  */