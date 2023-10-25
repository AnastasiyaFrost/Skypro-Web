//Задание 1
const arrNumb = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arrNumb.length; i++) {
    console.log(arrNumb[i]);
    if (arrNumb[i] === 10) break; 
}

//Задание 2
const arr = [1, 5, 4, 10, 0, 3];
console.log(arr.indexOf(4));

//Задание 3
const arr1 = [1, 3, 5, 10, 20];
console.log(arr1.join(` `));

//Задание 4
const arr2 = [];
for (let i = 0; i < 3; i++) {
    arr2.push([]);
    for (let j = 0; j < 3; j++) {
        arr2[i].push(1);        
    }
}
console.log(arr2);

//Задание 5
const arr3 = [1, 1, 1];
for (let i = 0; i < 3; i++) {
    arr3.push(2);
}
console.log(arr3);

//Задание 6
const arr4 = [9, 8, 7, 'a', 6, 5];
let el = arr4.indexOf('a');
if(el !== -1) {
    arr4.splice(el, 1);
}
console.log(arr4.sort());

//Задание 7
const arr5 = [9, 8, 7, 6, 5];
let userAnsw = Number(prompt("Угадай число в массиве!"));
if (arr5.includes(userAnsw)) {
    alert("Угадал, такое число в массиве есть!");
} else {
    alert("Не угадал, такого числа в массиве нет!");
}

//Задание 8
const str = 'abcdef';
const str2 = str.split('').reverse().join('');
console.log(str2);

//Задание 9
const arr6 = [[1, 2, 3,],[4, 5, 6]];
const arr7 = arr6.join(',');
console.log(arr7);

//Задание 10
const arr8 = [3, 5, 0, 1, 1, 9, 4, 3, 8];
for (let i = 0; i < arr8.length-1; i++) {
    console.log(arr8[i] + arr8[i + 1]);
}

//Задание 11
function square (array) {
    return array.map((number) => number ** 2);
}
console.log(square(arr8));

//Задание 12
function getLengthWords(array) {
    return array.map(el => el.length);
}
console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));

//Задание 13
function filterPositive(array) {
  return array.filter(e => e < 0);
}

filterPositive([-1, 0, 5, -10, 56]); 
filterPositive([-25, 25, 0, -1000, -2]);

//Задание 14
const arr9 = [];
for (let i = 0; i < 10; i++) {
    let e = Math.ceil(Math.random() *10);
    arr9.push(e);
}
const arr10 = arr9.filter(e => e % 2 === 0);
console.log(arr9);
console.log(arr10);

//Задание 15
const arr11 = [];
for (let i = 0; i < 6; i++) {
    let e = Math.ceil(Math.random() *10);
    arr11.push(e);
}
const average = arr11.reduce((a, b) => a + b) / arr11.length;
console.log(`Для массива ${arr11} среднее арифметическое равно ${average}`);
