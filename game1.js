function monthNumb() {
    let userNumb = prompt("Введите число от 1 до 12.");
    if (userNumb === 12 || userNumb >= 1 && userNumb <= 2) {
        alert("Это месяц зимы!");
    } else if (userNumb >= 3 && userNumb <= 5) {
        alert("Это месяц весны!");
    } else if (userNumb >= 6 && userNumb <= 8) {
        alert("Это месяц лета!");
    } else if (userNumb >= 9 && userNumb <= 11) {
        alert("Это месяц осени!");
    } else {
        alert("Вы ввели неверное число. Штрафной балл.");
    }
}