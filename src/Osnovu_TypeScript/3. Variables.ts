let nameVariavles: string = 'Alice';
const count3: number = 100;
let canPlay3: boolean = true;

// Null
let age: number | null = 30;
age = null;

function repeat(text: string, count: number) {
    let text3: string = '';
    for (let i = 0; i < count; i++) {
        text3 += text;
    }
    return text3;
}

console.log(repeat('hexlet', 2)); // hexlethexlet
console.log(repeat('wo', 3)); // wowowo
