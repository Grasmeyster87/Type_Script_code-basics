// Защита свойств и методов

/*
В языках с классами принято разделять свойства на публичные, приватные и защищенные. 
Первые доступны для всех, вторые могут использоваться только внутри класса, а третьи — внутри класса и в его наследниках. 
В этом уроке разберем каждый из этих видов.
*/

/*
Публичные свойства

По умолчанию в TypeScript все свойства публичные. Это можно обозначить явно с помощью ключевого слова public:
*/
/*
class Point36 {
    public x: number;
    public y: number; // по умолчанию свойство является публичным
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public someMethod() {
        // some logic
    }
}

const point36 = new Point36();
point36.x = 10; // OK
point36.y = 20; // OK
*/

// Приватные свойства
//Также свойства можно сделать приватными. Тогда пропадет возможность обращаться к ним снаружи напрямую:
/*
class Point361 {
    private x: number;
    private y: number; // по умолчанию свойство является публичным
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

const p361 = new Point361(10, 8);
/* 
p361.x; // Property 'x' is private and only accessible within class 'Point'.
p361.y; // Property ' y' is private and only accessible within class 'Point'.*/

/*
Защищенные свойства

И наконец, свойства можно сделать защищенными. Это значит, что они доступны внутри класса и в наследниках:
*/
/*
class Point362 {
    protected x: number;
  
    protected y: number;
  
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }
  
  class Point3D extends Point362 {
    protected z: number;
  
    constructor(x: number, y: number, z: number) {
      super(x, y);
      this.z = z;
    }
  
    public getCoordinates() {
      return [this.x, this.y, this.z]; // OK
    }
  }
  
  const p = new Point3D(10, 8, 5);*/
  /* p.x; // Property 'x' is protected and only accessible within class 'Point' and its subclasses.
  p.y; // Property 'y' is protected and only accessible within class 'Point' and its subclasses.
  p.z; */

  type CustomFileOptions36 = {
    name: string;
    size: number;
  };
  
  class CustomFile36 {
    private name: string;
  
    private size: number;
  
    constructor(options: CustomFileOptions36) {
      this.name = options.name;
      this.size = options.size;
    }
  
    protected toString() {
      return `${this.name} (${this.size} bytes)`;
    }
  }
  
  // BEGIN
  class ImageCustomFile extends CustomFile36 {
    private width: number;
  
    private height: number;
  
    constructor(options: CustomFileOptions36 & { width: number; height: number }) {
      super(options);
      this.width = options.width;
      this.height = options.height;
    }
  
    toString() {
      return `${super.toString()} ${this.width}x${this.height}`;
    }
  }
  // END

  const imageCustomFile = new ImageCustomFile({
    name: 'image.png',
    size: 100,
    width: 200,
    height: 300,
  });
  console.log(imageCustomFile.toString()); // image.png (100 bytes) 200x300