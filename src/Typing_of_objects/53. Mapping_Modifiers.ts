
/*
При сопоставлении типов можно менять атрибуты свойств такие как неизменность (immutability) и необязательность (optionality).
 Делается это с помощью соответствующих модификаторов: readonly и ?.

Чтобы добавить или удалить эти модификаторы, можно использовать префиксы + или -. 
Если не использовать префикс, то подразумевается что модификатор будет добавлен, то есть по умолчанию префикс +.

Примеры использования модификаторов есть в Utility Types:


*/


/**
 * Делает все свойства типа `T` необязательными,
 * то есть добавляет атрибут `?`.
 */
/*
type Partial<T> = {
    [P in keyof T]?: T[P];
  };
  
  /**
   * Делает все свойства типа `T` обязательными,
   * то есть удаляет атрибут `?`.
   */
  /*
  type Required<T> = {
    [P in keyof T]-?: T[P];
  };
  
  /**
   * Делает все свойства типа `T` неизменяемыми,
   * то есть добавляет атрибут `readonly`.
   */
  /*
  type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  };

  Подобным образом можно написать и тип, который делает все свойства типа изменяемыми, то есть удаляет атрибут readonly:

type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

Благодаря таким типам легче далеть производные типы из уже имеющихся.

Например, в приложении может быть тип User для не авторизованного пользователя у которого все поля не обязательные:

type User = {
  id?: string;
  firstName?: string;
  secondName?: string;
  email?: string;
};

Из него можно сделать авторизованного пользователя с помощью типа Required:

type AuthorizedUser = Required<DefaultUser>;

  */

/*
Задание

Реализуйте функцию deepFreeze(), которая принимает на вход объект и делает его самого, его поля и все вложенные объекты неизменяемыми и возвращает этот объект.
Предполагается что поля объекта и поля вложенных объектов не содержат массивы, только простые типы данных и объекты.

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

const deepFreeze = <T extends object>(obj: T): DeepReadonly<T> => {
  const freezedObj = Object.freeze(obj);

  Object.values(freezedObj).forEach((value) => {
    if (typeof value === 'object' && value !== null) {
      deepFreeze(value);
    }
  });

  return freezedObj;
};

const user = deepFreeze({
  name: 'John',
  password: '1q2w3e',
  token: 'test',
});

user.name = 'Alex'; // Error: Cannot assign to 'name' because it is a read-only property.

*/