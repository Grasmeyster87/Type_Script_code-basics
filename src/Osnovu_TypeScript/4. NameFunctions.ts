// Обязательный параметр

function getGreetingPhrase(name: string) {
    return `Hello, ${name.toUpperCase()}!`;
}

// Expected 1 arguments, but got 0.
getGreetingPhrase('11');

//Необязательный параметр



function getGreetingPhrase1(name?: string) {
  return `Hello, ${name ? name.toUpperCase() : 'Guest'}!`;
}

getGreetingPhrase1('Mike'); // Hello, MIKE!
getGreetingPhrase1(); // Hello, Guest!

/*
function getGreetingPhrase(name?: string | null) {
  return `Hello, ${name ? name.toUpperCase() : 'Guest'}!`;
}
  */

// Значение по умолчанию

function getGreetingPhrase2(name = 'Guest') {
  return `Hello, ${name.toUpperCase()}!`;
}

getGreetingPhrase2() // Hello, GUEST!

// Тип возвращаемого значения

function getGreetingPhrase3(name: string): string {
  return `Hello, ${name.toUpperCase()}!`;
}


/*
function getHiddenCard(cardNumber: string, hiddenPartLength = 4): string {
  const visibleDigitsLine = cardNumber.slice(-4);
  return visibleDigitsLine.padStart(hiddenPartLength + 4, '*');
}
  */
/*
function getHiddenCard(text: string, value: number = 4) {
    let result: string = '';
    let count:number = 3;
    
    for(let i = 0; i < value; i++ ){
        result += '*';        
    }
    
    for(let i = 0; i <4; i++) {
        result += text[text.length -1- count];
        count -=1;
    }

    count = 4;
    return result;
}

// Кредитка передается внутрь как строка
console.log(getHiddenCard('1234567812345678', 2)); // "**5678"
console.log(getHiddenCard('1234567812345678', 3)); // "***5678"
console.log(getHiddenCard('1234567812345678'));    // "****5678"
console.log(getHiddenCard('2034399002121100', 1)); // "*1100"
*/
