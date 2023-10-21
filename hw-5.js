console.log("Задание 1");

let x = prompt("Введите первое число");
let y = prompt("Введите второе число");

function minNumber(x, y) {
    let minNumb = x > y ? y : x;
    console.log(minNumb);
}

minNumber(x, y);


console.log("Задание 2");

let n = prompt("Введите число");

function isEven(n) {
    n % 2 === 0 ? console.log("Число чётное") : console.log("Число нечётное");
}

isEven(n);


console.log("Задание 3");

function printNumSquare(n) {
    console.log(n ** 2);
}

function calcNumSquare(n) {
    return n ** 2;
}


console.log("Задание 4");

function greetingByAge () {
    let userAge = prompt("Сколько Вам лет?");
    if(userAge < 0) {
        console.log("Вы ввели неправильное значение!");
    } else if(userAge > 0 && userAge < 12) {
        console.log("Привет, друг!");
    } else {
        console.log("Добро пожаловать!");
    }
}


console.log("Задание 5");

function calcMultiply(x, y) {
    let multiply = Number(x*y);
   isNaN(multiply) ? console.log('Одно или оба значения не являются числом') : console.log(multiply);
}


console.log("Задание 6");

function calcNumInCube(n) {
    if(isNaN(n)) {
        console.log("Переданный параметр не является числом");
    } else {
        let cube = n ** 3;
        console.log(`${n} в третьей степени равно ${cube}`);
    }
}
calcNumInCube(x);


console.log("Задание 7");

function getArea() {
    let area = 3.14159 * `${this.radius}` ** 2;
    console.log(area);
}
function getPerimeter() {
    let perimeter = 2 * 3.14159 * `${this.radius}`;
    console.log(perimeter);
}

const circle1 = {
    radius: 3,

    getArea: getArea,
    getPerimeter: getPerimeter,
}
const circle2 = {
    radius: 6,

    getArea: getArea,
    getPerimeter: getPerimeter,
}
circle1.getArea();
circle1.getPerimeter();