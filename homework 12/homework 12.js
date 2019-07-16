//Task 1
var arr = ['vasya', 'petya', 'vanya'];

function objCreate(arr) {
    var newArr = [];
    for (var i=0; i<arr.length; i++){
        var newObj = {};
        newObj.name = arr[i];
        newArr.push(newObj);
    }
    return newArr;

}
objCreate(arr);

//Task 2

var arr = ['00', '13', '24'];

function clockCreate(arr) {
    return 'Текущее время : ' + arr.join(' : ');

}
clockCreate(arr);

// Task 3
// Топорный варинат

var textInput = 'Это было очень длинное лето';

function vowels(text) {
    var count = 0;
    var textMod = text.toLowerCase().split('');

    for(var i=0; i<textMod.length; i++) {
        if (textMod[i] === 'а' || textMod[i] === 'е' || textMod[i] === 'ё' || textMod[i] === 'и' || textMod[i] === 'о' || textMod[i] === 'у' || textMod[i] === 'ы' || textMod[i] === 'э' || textMod[i] === 'ю' || textMod[i] === 'я') {
            count++
        }

    }
    return  'Количество гласных букв в тексте: ' + count + '.';

}
vowels(textInput);

// Вариант через регулярное выражение

var textInput = 'Это было очень длинное лето';

function vowels(text) {
    return 'Количество гласных букв в тексте: ' + text.toLowerCase().replace(/[^аеёиоуыэюя]/gi,"").length + '.';
}
vowels(textInput);

// Вариант который вы возможно от нас хотите.

var textInput = 'Это было очень длинное лето';

function vowels(text) {
    var count = 0;
    var textMod = text.toLowerCase().split('');
    var vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    for (var i =0; i <textMod.length; i++) {
        for (var j = 0; j<vowels.length; j++) {
            if (textMod[i] === vowels[j]) {
                count++
            }
        }
    }
    return count;
}
vowels(textInput);

//Task 4


var textInput = "Это просто текст. Какое удивительное небо! Может по пиву? Нет, не сегодня";

function editText(textInput) {
    var textMod= textInput.toLowerCase().split(/[\!?.]/);
    for (var i=0; i<textMod.length; i++) {
        var currentText = textMod[i].split('');
        var count =0;

        for (var j= 0; j< currentText.length; j++){

            if (currentText[j] != ' ' && currentText[j] != ',') {
                count++;
            }

        }
        console.log('Предложение: /' + textMod[i] + '/ содержит ' + count + ' букв.' )
    }

}
editText(textInput);

