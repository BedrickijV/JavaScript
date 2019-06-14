//Дополнительное задание
while (true) {
    var surname = prompt('Enter surname');
    if (surname.length >= 2) break;
    alert('Error. Invalid value');
}
while (true) {
    var name = prompt('Enter name');
    if (name.length >= 2) break;
    alert('Error. Invalid value');
}
while (true) {
    var patronymic = prompt('Enter patronymic');
    if (patronymic.length >=2) break;
    alert ('Error. Invalid value');
}
while (true) {
    var age = prompt('Enter age');
    if (isNaN(parseInt(age)) === false && age > 0 && age <= 105) break;
    alert('Error. Invalid value');
}
var gender = confirm('you\'re a man??');
if (gender == true) {gender = 'male'
}else {gender = 'female'};

var retired;
if (age<60) {retired = 'no'
}else {retired ='yes'} ;

alert('Your name : ' + surname + ' ' + name + ' ' + patronymic + '\n'
    + 'Your age in years : ' + age + '\n'
    + 'Your age in days : ' + age * 365 + '\n'
    + 'In 5 years you will be : ' + (+age + 5) + '\n'
    + 'Your gender is : ' + gender + '\n'
    + 'You are on retired: ' + retired + '\n'
);