// Структурная типизация

/*
В JavaScript возможно работать с объектами и классами одинаковым образом. 
При этом не нужно опираться ни на наследование, ни на интерфейсы. 
Нужны только ожидаемые поля и методы. 
Такой подход называют утиной типизацией — duck typing. 
То что ходит как утка и крякает как утка – утка:
*/
/*
const user32 = {
    firstName: 'Vassiliy',
    lastName: 'Kuzenkov',
    type: 'user'
  }
  
  const admin = {
    firstName: 'Kirill',
    lastName: 'Mokevnin',
    type: 'admin'
  }
  
  type User32 = {
    type: string,
    firstName: string,
    lastName: string
  }
  
  const formatUser = (user32: User32): string =>
    [user32.type, ':', user32.firstName, user32.lastName].join(' ');
  
  formatUser(user32); // ok
  formatUser(admin); // ok

  */
/*
  const moderator = {
    firstName: 'Danil',
    lastName: 'Polovinkin',
    type: 'moderator',
    email: 'danil@polovinkin.com'
  }
  
  type User32 = {
    type: string,
    firstName: string,
    lastName: string
  }
  
  const formatUser = (user: User32): string =>
    [user.type, ':', user.firstName, user.lastName].join(' ');
  
  formatUser(moderator); // ok
*/
/*
type IntersectionUser = {
    username: string;
    password: string;
  } & {
      type: string;
  }
  
  const admin: IntersectionUser = {  // требуется совпадение c объектным типом и слева и справа от оператора &
    username: 'test',
    password: 'test',
    type: 'admin'
  }
  
  type UnionUser = {
      username: string;
      password: string;
  } | {
      type: string;
  }
  
  const user: UnionUser = { username: 'test', type: 'user' } 
  */
/*
  Задание

Опишите тип состояния DataState и перечисление LoadingStatus. 
Затем реализуйте функцию handleData(), которая принимает на вход DataState и возвращает строку в зависимости от состояния: 
loading... при LoadingStatus.loading, error при LoadingStatus.error, 
строку из числового поля data при LoadingStatus.success. 
Если статус не входит в перечисление, функция возвращает unknown.
*/

// BEGIN
enum LoadingStatus {
    Loading = 'Loading',
    Success = 'Success',
    Error = 'Error',
  }
  
  type DataState =
    | { status: LoadingStatus.Loading }
    | { status: LoadingStatus.Success; data: number }
    | { status: LoadingStatus.Error; error: Error };
  
  const handleData = (dataState: DataState): string => {
    switch (dataState.status) {
      case LoadingStatus.Loading:
        return 'loading...';
      case LoadingStatus.Success:
        return String(dataState.data);
      case LoadingStatus.Error:
        return dataState.error.message;
      default:
        return 'unknown';
    }
  };
  // END

const loading: DataState = { status: LoadingStatus.Loading };
console.log(handleData(loading)); // loading...

const error: DataState = { status: LoadingStatus.Error, error: new Error('error') };
console.log(handleData(error)); // error

const success: DataState = { status: LoadingStatus.Success, data: 42 };
console.log(handleData(success)); // 42

