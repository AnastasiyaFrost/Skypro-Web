console.log("Задание 1");
let a = 0;

while (a < 2) {
	console.log("Привет!");
	a++;
}

console.log("Задание 2");

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("Задание 3");

for (let i = 7; i <= 22; i++) {
  console.log(i);
}

console.log("Задание 4");

const obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
};

for (let name in obj) {
    console.log(`${name} - зарплата ${obj[name]} долларов.`);
}

console.log("Задание 5");
let num = 0;
for (let n = 1000; n>=50; num++) {
    n /=2;
}
console.log(num);

console.log("Задание 6");
for (let fri = 1; fri <= 31; fri+=7) {
    console.log(`Сегодня пятница, ${fri}-е число.`);
}