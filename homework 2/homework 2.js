//Задание 1
var mainNumber = prompt('Enter number');
var plusNumber = prompt('How much to add?');
var minusNumber = prompt('How much to take?');
var multiplyNumber = prompt('How much to multiply?');
var divideNumber = prompt('how much to divide?');
var result= ((((+mainNumber + +plusNumber)- +minusNumber)* +multiplyNumber)/ +divideNumber);
alert('Formula: ((('+mainNumber +'+'+ +plusNumber +')-'+ +minusNumber +')*'+ +multiplyNumber +')/'+ +divideNumber+ '; ' + '\n' + 'Result' +'='+ result);


//Задание 2
var login = prompt('Enter login');

    if (login== 'Admin')
    {
        var password = prompt('Password?');
            if (password == 'Black lord')
                {
                    alert('Welcome!');
                }
                else if (password == null)
                    {
                        alert('Login canceled!');
                    }
                    else
                        {
                            alert('Wrong password');
                        }
    }
        else if (login == null)
            {
                alert('Login canceled');
            }
            else
                {
                    alert ('I do not know you');
                }

// Задание 3
var login = prompt('Enter login')

var message = (login === 'Vasia') ? 'Hello' : (login === 'Director') ? 'Good afternoon!' : (login === '') ? 'no login': '';
alert(message);


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
    if (age>18 && age<60) {retired = 'no'
    }else if (age<18) {retired = 'no'
    }else {retired ='yes'} ;

alert('Your name : ' + surname + ' ' + name + ' ' + patronymic + '\n'
    + 'Your age in years : ' + age + '\n'
    + 'Your age in days : ' + age * 365 + '\n'
    + 'In 5 years you will be : ' + (+age + 5) + '\n'
    + 'Your gender is : ' + gender + '\n'
    + 'You are on retired: ' + retired + '\n'
);













