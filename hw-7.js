console.log("Задание 1");

let str = "hello!";
console.log(str);
let str2 = str.toUpperCase();
console.log(str2);
console.log(str.toLocaleUpperCase());

console.log("Задание 2");

function searchStart(arr, word) {
    arr.forEach(el => {
        if(el.toLowerCase().startsWith(word.toLowerCase())) {
            console.log(el);
        }
    });
}

searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');

console.log("Задание 3");

let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

console.log("Задание 4");
let nums = [52, 53, 49, 77, 21, 32];

console.log(Math.max.apply(null, nums));
console.log(Math.min.apply(null, nums));

console.log("Задание 5");

function getRandom() {
    console.log(Math.round(Math.random() * 10));
}

console.log("Задание 6");

function getRandomArrNumbers(param) {
    const arrLength = Math.floor(param/2);
    const arr = [];
    for (let i = 0; i < arrLength; i++) {
        arr.push(Math.round(Math.random() * param));
    }
    console.log(arr);
}
getRandomArrNumbers(11);

console.log("Задание 7");

function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue- minValue)) + minValue;
}
console.log(getRandomInt(2, 7));

console.log("Задание 8");

let currentDate1 = new Date();
console.log(currentDate1);

console.log("Задание 9");
let currentDate = new Date();
console.log(currentDate);
let newDate = new Date();
newDate.setDate(currentDate.getDate() + 73);
console.log(newDate);

console.log("Задание 10");

function dateScreen(date) {
    const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 
    'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    const daysWeek = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
    return 'Дата: '+ date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear() + ' - это ' + ' ' 
    + daysWeek[date.getDay()] + '. \nВремя: ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}
let curDate = new Date();
console.log(dateScreen(curDate));