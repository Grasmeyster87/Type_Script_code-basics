// Сужение типа (Narrowing)

// Ниже пример реализации функции, которая конвертирует любое переданное значение в boolean:

function isPresence(value: unknown): boolean {
    if (value === null || value === undefined) {
        return false;
    }
    // пустая строка
    if (typeof value === 'string') {
        if (value === '') {
            return false;
        }
    }
    // пустой массив
    if (Array.isArray(value)) {
        if (value.length === 0) {
            return false;
        }
    }
    // пустой объект
    if (value instanceof Object) {
        if (Object.keys(value).length === 0) {
            return false;
        }
    }

    return true;
}

isPresence(''); // false
isPresence({}); // false
isPresence([]); // false
isPresence([1, 3]); // true
isPresence(10); // true

/*
В этом коде параметр имеет тип unknown. Внутри TypeScript позволяет выполнять с этим параметром разные действия. Они будут зависеть от заданных условий.

В этом случае проверка типов выполняется статически до запуска кода. А условия внутри функции — это часть кода, который выполняется в рантайме, то есть во время запуска программы. Получается, что такой код должен был бы завершиться с ошибкой, но этого не происходит.

Так как подобный код в JavaScript встречается часто, то систему типов TypeScript пришлось доработать так, чтобы осталась возможность писать подобный код.

В данном случае оказывается, что TypeScript умеет выполнять часть условных конструкций статически, как проверку совместимости типов, без запуска кода. Затем внутри блока с условием компилятор считает, что тип значения совпадает с тем, что было в самой проверке. Этот процесс в TypeScript называется Type Narrowing — сужение типа.

Сужение типа работает не только для типа unknown. Это универсальный механизм, который работает со всеми возможными типами, например, Union Types:

function foo(value: number | string) {
  if (typeof value === 'number') {
    // Работаем как с числом
  }
  if (typeof value === 'string') {
    // Работаем как со строкой
  }
}

switch также поддерживает сужение типа:

function foo(value: number | string) {
  switch (typeof value) {
    case 'number':
      // какая-то логика
      break;
    case 'string':
      // какая-то логика
      break;
  }
}

Внутри каждого блока case тип значения сужается до того, что было в самом case.

Перегрузка функций в TypeScript — это тоже пример работы сужения типов:

function concat(a: number, b: number): string;
function concat(a: string, b: string): string;

function concat(a: any, b: any): string {
  if (typeof a === 'string') {
    return `${a}${b}`; // (parameter) a: string
  } else {
    return `${a.toFixed()}${b.toFixed()}`;
  }
}

Защитники типа (Type Guard)

function isObject(value: unknown): value is object {
  return typeof value === 'object' && value !== null;
}

Здесь мы используем ключевое слово is для указания, что переданное значение является объектом. Внутри функции мы должны вернуть true или false. В нашем примере мы указываем возвращаемый тип как value is object. Это означает, что мы утверждаем, что value является объектом. Такая запись позволяет нам также сужать типы.

function isObject(value: unknown): value is object {
  return typeof value === 'object' && value !== null;
}

function foo(value: unknown) {
  if (isObject(value)) {
    // (parameter) value: object
  }
}

*/

function last(value: string | number): string | number {
    const strValue = value.toString();
    const lastChar = strValue.charAt(strValue.length - 1);
    return typeof value === 'string' ? lastChar : parseInt(lastChar, 10);
}

// Передаем в качестве параметра строку
// Функция возвращает строку
last('hexlet'); // t

// Передаем в качестве параметра число
// Функция возвращает число
last(12345); // 5
