// Анотация Типов

// Ипользование аннотации типов

/*
type User = {
  name: string
};

// При определении констант и переменных
const users: User[] = [];

// В определении функций
function foo(users: User[]) {
  // ...
}

В случае составных типов, 
например, если мы хотим использовать объединение или описание объекта, добавляются круглые скобки — (Type)[]:

const users: ({name: string})[] = [];
const users: (string | null)[] = [];
const users: (User | null | { name: string })[] = [];

Также TypeScript дает еще один синтаксис, который описывается так: Array<Type>. 
Он универсальный — с его помощью можно описать любой массив. 
Описывается тип в такой записи между знаками меньше и больше:

const users: Array<User> = [];
const user: Array<number> = [];
const users: Array<User> = [];

const users: Array<{name: string}>=[];
const users: Array<string | null> = [];

Определение пустого массива

Если определить пустой массив и не указать тип, то его типом автоматически станет any[]. 
В такой массив можно добавить любые данные, включая вложенные массивы

const items = [];
items.push(1);
items.push('wow');
items.push(['code-basics'], 'hexlet');

Код с any будет работать всегда, но он выключает проверку типов. 
Чтобы этого не происходило, нужно всегда явно типизировать пустой массив:

const items: Array<number> = [];

*/

function unique(array: any[]): any[] {
   //console.log([...Array.from(new Set(array))]) //
    return [...Array.from(new Set(array))];
}

unique([9, 9, 3, 8, 8]); // [9, 3, 8]
unique(['twinkle', 'twinkle', 'little', 'bat']); // ['twinkle', 'little', 'bat']
unique([1, 1, 3, 'oops!']); // [1, 3, 'oops!']
