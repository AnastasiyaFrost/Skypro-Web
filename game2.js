function rememberWords() {
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 
    'Апельсин', 'Мандарин'];
    words = words.sort(() => Math.random() - 0.5);
    alert(words);

    let firstQuestion = prompt('Какое слово было первым?');
    let secondQuestion = prompt('Какое слово было последним?');

    if(firstQuestion.toLowerCase() === words[0].toLowerCase() &&
     secondQuestion.toLowerCase() === words[words.length - 1].toLowerCase()) {
        alert("Всё верно, поздравляю с победой!");
     } else if(firstQuestion.toLowerCase() === words[0].toLowerCase() ||
     secondQuestion.toLowerCase() === words[words.length - 1].toLowerCase()) {
        alert("Ты был близок к победе :)");
     } else {
        alert("Не угадал, попробуй ещё раз!");
     }
}