// Объединения (Union Types)

type at = (str: string, position: number) => string | undefined;

/*
В TypeScript это означает, что в результате мы получаем тип, 
который обещает содержать переменную одного из типов объединения. 
Так мы можем завести свой тип, под который попадают все строки ИЛИ числа:
*/

type NumberOrString = number | string;

let val: NumberOrString = 10;
val = 'My string';
// val - true; // Type 'boolean' is not assignable to type 'NUmber Or String';

/*

На практике нередко встречаются случаи, когда нам нужно поддержать работу функции с большим количеством допустимых значений.
 В JavaScript мы можем соединить строку не только со строкой, но и числом или с true. 
 Для решения похожей задачи в прошлых уроках мы познакомились с перегрузкой функции. 
 Опишем тип такой функции с применением объединения:

*/

type AllowedToConcatenation = number | string | null | undefined | boolean;

const concat26 = (
    base: AllowedToConcatenation,
    suffix: AllowedToConcatenation
): string => `${base}${suffix}`;

function lastIndex(
    str: AllowedToConcatenation,
    char: AllowedToConcatenation
): AllowedToConcatenation {
    let val4: AllowedToConcatenation = '';
    str.toString()
        .split('')
        .forEach((element, index) => {
            if (element === char) {
                return (val4 = index);
            } else if (index == str.toString().split('').length - 1) {
                val4 = null;
            }
        });

    return val4;
}

/*
function lastIndex(str: string, char: string): number | null {
  const index = str.lastIndexOf(char);
  return index === -1 ? null : index;
}
  */
const str = 'test';
lastIndex(str, 't'); // 3
lastIndex(str, 'p'); // null
