// Null и Undefined

/*
В статически типизированных языках, где null используется как общий тип для всего, 
проверка типов ничего не подскажет. В таком случае возникает исключение 
NullPointerException — одно из самых запоминающихся для всех пользователей. 
Поэтому код начинает обрастать проверками на null:

public void doSomething(SomeObject obj) {
  if(obj != null) {
    obj.myMethod();
  }
}

doSomething(null);

function foo(value?: string | null) {
  const upperValue = value.toUpperCase(); // Object is possibly 'null' or 'undefined'.
  // остальная логика
}

В данном случае мы получили ошибку компиляции, потому что value может быть null или undefined.

Чтобы ее решить, нужно написать соответствующее условие или использовать оператор ?.. Это позволяет избежать ошибок во время исполнения кода:

function foo(value?: string | null) {
  if (value !== null && value !== undefined) {
    const upperValue = value.toUpperCase(); // (parameter) value: string
  }
  // остальная логика
}

*/

function formatPrice(price?: number | null): string {
    if (price === undefined || price === null) {
      return '$0.00';
    }
  
    return `$${price.toFixed(2)}`;
  };
