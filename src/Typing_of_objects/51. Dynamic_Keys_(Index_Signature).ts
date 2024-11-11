// Динамические ключи (Index Signature)

/* 
В ходе курса мы уже работали с объектными типами и с интерфейсами, в которых имена полей заданы заранее. 
Теперь познакомимся с синтаксисом для динамических ключей:
*/

type dynamicKeysObject = {
    [key: string | number | symbol]: unknown;
};

/*
Здесь мы объявили объектный тип dynamicKeysObject, в котором ключом может служить любой тип из доступных типов данных key: string | number | symbol. Попробуем указать такой тип для переменной:

const obj: dynamicKeysObject = {
  name: 'John',
  age: 30,
  0: 'zero',
  [Symbol('secret')]: 'symbol',
};

Динамические ключи можно также использовать совместно с указанными явно полями. Тогда ограничения динамических полей также будут распространяться и на них:

type MyTheme = {
  palette: {
    primary: 'red' | 'green' | 'blue';
    [key: string]: string;
  },
  [key: string]: unknown;
};

const theme = {
  palette: {
    primary: 'red',
  },
  spacing: {
    small: 8,
  },
} satisfies MyTheme;

В примере мы явно указали тип для поля palette, получили корректную проверку типа с помощью satisfies и при этом оставили достаточно свободы для дальнейшего расширения темы.

Такой же синтаксис и поведение у динамических ключей в интерфейсах:

interface MyTheme {
  palette: {
    primary: string;
  };
  [key: string]: unknown;
}

В классах index signature можно использовать и для обычных полей, и для static:

class Template {
  static [propName: string]: string | number;

  [key: string]: string;
}

Template.test = 'test';

const template = new Template();
template.test = 'test';

*/

/*
Template String Literal

Динамические ключи полезны там, где нам неизвестны все возможные имена полей объекта, но мы все равно хотим ограничить их тип. В TypeScript тип ключа может также быть и шаблонным литералом. Например, если мы хотим объявить тип слушателя и потребовать, чтобы все его методы начинались со слова on:

type Listeners = {
  [key: `on${string}`]: (value: unknown) => void
}

const streamListeners: Listeners = {
  onStart() {},
  onFinished() {}
}

Литеральный тип on${string} нам говорит, что мы ожидаем строку по шаблону «начинается с on и дальше любая строка». 
Такая техника называется Template String Literal и используется, чтобы наложить ограничения при типизации строк.

Если мы рассмотрим типичное веб-приложение, то обнаружим, что структура большинства объектов нам известна изначально.
Поэтому использование динамических ключей можно часто увидеть в библиотеках и в ряде вспомогательных функций, 
которые мы рассмотрим в следующих уроках.
*/

/*
Задание

Реализуйте интерфейс EmployeeSalary, где ключом выступает имя (string), 
а значением — зарплата (number). 
Также реализуйте функцию buildSalaryStatistics(employees: EmployeeSalary): SalaryStatistics, 
которая должна возвращать минимальную (поле min), среднюю (поле avg) и самую высокую (поле max) зарплату.

*/
interface SalaryStatistics {
    min: number;
    max: number;
    avg: number;
}

// BEGIN
interface EmployeeSalary {
    [name: string]: number;
}

const buildSalaryStatistics = (employees: EmployeeSalary): SalaryStatistics => {
    const salaries = Object.values(employees);
    const min = Math.min(...salaries);
    const max = Math.max(...salaries);
    const avg =
        salaries.reduce((acc, salary) => acc + salary, 0) / salaries.length;

    return { min, max, avg };
};
// END

const employees: EmployeeSalary = {
    mango: 100,
    poly: 50,
    ajax: 150,
};

employees.ironMan = 1000;

buildSalaryStatistics(employees); // { min: 50, max: 1000, avg: 325 }
