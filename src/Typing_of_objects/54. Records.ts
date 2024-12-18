// Записи (Record)
/*
Объекты с динамической структурой, когда мы добавляем в них поля во время исполнения программы, 
часто используются для построения контекста или хранения данных. Напишем вспомогательный тип для построения такого объекта:

type Context<K extends string, V> = {
  [Key in K]: V;
}

const runApp = <C extends Context<string, unknown>>(ctx: C) => {};

Ключ Key примет перебором все значения из K. В свою очередь K является подмножеством string, а V может быть любым. Таким образом здесь мы создали свой тип Context со строковыми полями и неизвестным типом для значения.

Подобная конструкция, когда мы не задаем дополнительно никаких специфичных полей с динамическими ключами, встречается довольно часто. Встроенные Utility Types предоставляют для этого готовое решение — Record<Keys, Type>. Этот обобщенный тип принимает первым аргументом тип ключа, а вторым — тип значения. Внутри все устроено схожим образом, как в нашем типе Context:

type Rating = 0 | 1 | 2 | 3 | 4 | 5;
type SongsRating = Record<string, Rating>;

const songsRating: SongsRating = {
  ratata: 4,
}

Таким типом SongsRating мы можем задать тип объекта с произвольным ключом (именем песни) и рейтингом — числом от нуля до пяти.

Record — более предпочтителен при описании объектных типов в TypeScript. Это позволяет гибко и лаконично описывать динамические структуры и использовать Record совместно с другими типами данных.

Задание

Реализуйте функцию createAccessChecker(), которая принимает на вход объект с разрешениями для ролей и возвращает функцию, проверяющую, есть ли у пользователя доступ к ресурсу.

type UserRole = 'admin' | 'user' | 'guest';
type UserResource = 'document' | 'user' | 'adminPanel';


type Property = string | number | symbol;

const createAccessChecker = (
  <Roles extends Property, Resource>(permissions: Record<Roles, Array<Resource>>) => (
    (role: Roles, resource: Resource) => permissions[role].includes(resource)
  )
);

const userRolePermissions: Record<UserRole, Array<UserResource>> = {
  admin: ['document', 'user', 'adminPanel'],
  user: ['document', 'user'],
  guest: ['document'],
};

const checkUserAccess = createAccessChecker<UserRole, UserResource>(userRolePermissions);

const isAdminAllowed = checkUserAccess('admin', 'adminPanel');
console.log(isAdminAllowed); // => true

const isUserAllowed = checkUserAccess('user', 'adminPanel');
console.log(isUserAllowed); // => false

*/
