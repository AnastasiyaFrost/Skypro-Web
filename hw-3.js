console.log('Задание 1');
let password1 = "krjb478";
let password2 = "lj3outa4j";
let message = password1 === password2 ? "Пароль введен верно" : "Пароль введен неправильно";
console.log(message);

console.log('Задание 2');
let c = 4;
let result = c>0 && c<10 ? "Верно" : "Неверно";
console.log(result);
c = 0;
result = c>0 && c<10 ? "Верно" : "Неверно";
console.log(result);
c=10;
result = c>0 && c<10 ? "Верно" : "Неверно";
console.log(result);
c= -3;
result = c>0 && c<10 ? "Верно" : "Неверно";
console.log(result);
c=2;
result = c>0 && c<10 ? "Верно" : "Неверно";
console.log(result);

console.log('Задание 3');
let d= 8;
let e = 55;
message = d > 100 || e > 100 ? "Верно" : "Неверно";
console.log(result);

console.log('Задание 4');
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
console.log(Number(a) + Number(b));

console.log('Задание 5');
let monthNumber = Number(prompt("Введи номер месяца"));
switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log("Это зимний месяц!!!!!");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Это весенний месяц, привет лужам и авитаминозу.. И ёлку пора уже выбрасывать");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Это лето, юхууу!!!!!");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Это осенняя пора, очей очарованье");
        break;
    default: console.log("Это вообще не то, загляни-ка в календарь")
        break;
}

console.log('Задание 7');
let numberInput = Number(prompt("Введи любое число"));
message = numberInput%2 === 0 ? "Число четное" : "Число нечетное";
alert(message);

console.log('Задание 8');
let clientOS = 1;
message = clientOS===0 ? "Установите версию приложения для iOS по ссылке" : "Установите версию приложения для Android по ссылке";
console.log(message);

console.log('Задание 9');
let clientDeviceYear = 2015;
if (clientOS === 0) {
    if (clientDeviceYear < 2015) {
        console.log("Установите облегченную версию приложения для iOS по ссылке");
    } else {
        console.log("Установите версию приложения для iOS по ссылке");
    }
} else {
    if (clientDeviceYear < 2015) {
        console.log("Установите облегченную версию приложения для Android по ссылке");
    } else {
        console.log("Установите версию приложения для Android по ссылке");
    }
}