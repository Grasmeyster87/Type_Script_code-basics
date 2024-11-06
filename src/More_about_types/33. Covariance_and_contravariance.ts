// Ковариантность и контравариантность
/*
Чтобы решить проблему с ComparatorCallback, нам нужно сузить возвращаемый тип функции comparator до -1 | 0 | 1 
или более узкого. Перепишем код без Math.sign, чтобы вернуть нужный тип:
*/
/*
type ComparatorCallback = (item1: number, item2: number) => -1 | 0 | 1
declare function sort(arr: Array<number>, callback: ComparatorCallback): Array<number>

const arr = [1, 2, 3];
const comparator = (item1: number, item2: number) => {
// (item1: number, item2: number) => -1 | 0 | 1;
    if (item1 === item2) {
        return 0;
    }

    return item1 > item2 ? 1 : -1;
};

sort(arr, comparator);
*/

type ComparatorCallback = (item1: number, item2: number) => -1 | 0 | 1
declare function sort(arr: Array<number>, callback: ComparatorCallback): Array<number>

const arr = [1, 2, 3];
const comparator = (item1: number, item2: number) => {
// (item1: number, item2: number) => -1 | 0 | 1;
    if (item1 === item2) {
        return 0;
    }

    return item1 > item2 ? 1 : -1;
};

sort(arr, comparator);

/*
type Formatter = (val: string) => string;

const formatToConcrete: Formatter = (): 'test' => 'test';
const formatToNumber: Formatter = (val: '1') => val; // Error!

Ответ

Если при работе с TypeScript учитывать наследие JavaScript с утиной типизацией, то все становится на свои места.

Чтобы код не упал с ошибкой, достаточно проверки на наличие полей или методов нужных типов. 
А чтобы получить гарантии во внешнем мире, нужно, чтобы переменная попадала под внешние ограничения. 
Для этого тип должен быть более узким или таким же.
*/

/*
Задание

Реализуйте функцию applyTransactions(wallet) и типы Transaction, Wallet. Wallet содержит список транзакций в виде массива элементов типа Transaction и числовой баланс. Transaction содержит метод apply, который принимает баланс и возвращает новый баланс.

Функция applyTransactions(wallet) должна принимать аргумент типа Wallet и возвращать баланс после применения всего списка транзакций. В случае ошибки в одной из транзакций должно вернуться изначальный баланс, и не продолжать применять транзакции.

// BEGIN (write your solution here)
type Transaction = {
    apply: (amount: number) => number;
};

type Wallet = {
    transactions: Transaction[];
    balance: number;
};

const applyTransactions = (wallet: Wallet) => {
    try {
        let { balance } = wallet;

        wallet.transactions.forEach((transaction) => {
            balance = transaction.apply(balance);
        });
        return balance;
    } catch (e) {
        return wallet.balance;
    }
};
// END

const wallet: Wallet = {
  transactions: [
    {
      apply: (amount) => amount + 1,
    },
  ],
  balance: 0
}

console.log(applyTransactions(wallet)) // 1
*/