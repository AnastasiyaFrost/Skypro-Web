//задание 1
let a = 10;
alert(a);
a=20;
alert(a);
//задание 2
const firstIphoneReleaseYear = 2007;
alert(firstIphoneReleaseYear);
//задание 3
const jsCreatorName = `Brandan Eich`;
alert(jsCreatorName);
//задание 4
let x = 10;
let y = 2;
alert(x+y);
alert(x-y);
alert(x*y);
alert(x/y);
//задание 5
let result = 2**5;
alert(result);
//задание 6
let a6 = 9;
let b6 = 2;
alert(a6%b6);
//задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);
//задание 8
let age = Number(prompt("Сколько вам лет?"));
alert(age);
//задание 9
const user = {
    name: `Lavashik`,
    age: 14,
    isAdmin: true
}
user[`city of residence`] = `Orel`;
user.age = 15;
delete user[`city of residence`];
let info = prompt("Какую информацию хотите узнать о пользователе?", "name");
alert(user[info]);
//задание 10
let helloName = prompt("Как вас зовут?");
alert(`Привет, ${helloName}!`);