console.log("Задание 1");

const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];
function compareNumbers(a, b) {
  return a.age - b.age;
}
console.log(people.sort(compareNumbers));

console.log("Задание 2");

const people2 = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

function isPositive(num) {
return Number(num) >= 0;
}
function isMale(person) {
 return person.gender === 'male';
}
function filter(arr, ruleFunction) {
 const result = [];

 for (let i = 0; i < arr.length; i++) {
    if(ruleFunction(arr[i])) {
        result.push(arr[i]);
    }
 }
 return result;
}

console.log(filter([3, -4, 1, 9], isPositive));
console.log(filter(people2, isMale));


console.log("Задание 3");

const deadline = 1000 * 30;

const interval = setInterval(() => {
    console.log(new Date());
}, 1000 * 3);
setTimeout(() => {
    clearInterval(interval);
    console.log('30 секунд прошло');
}, deadline)

console.log("Задание 4");

function delayForSecond(callback) {
    setTimeout(() => {
        callback();
    }, 1000)
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

console.log("Задание 5");

// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond2(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond2(() => {sayHi('Глеб')});