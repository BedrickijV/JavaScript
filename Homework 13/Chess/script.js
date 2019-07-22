var body = document.getElementById('body');
var button = document.getElementById('button1');
var inputX = document.getElementById('inputX');
var inputY = document.getElementById('inputY');
var table = document.createElement('table');


inputX.onkeyup = function () {
    if (inputX.value.length === 0 || inputY.value.length === 0) {
        button.disabled = true
    } else {
        button.disabled = false
    }

};
inputY.onkeyup = function () {
    if (inputY.value.length === 0 || inputX.value.length === 0) {
        button.disabled = true
    } else {
        button.disabled = false
    }

};
button.addEventListener('click', checkValueAndTableCreate);

function checkValueAndTableCreate() {
    if (+inputX.value > 10 || isNaN(+inputX.value)) {
        alert('Enter X value >0 and <8!');
    } else if (+inputY.value > 10 || isNaN(+inputY.value)) {
        alert('Enter Y value >0 and <8!');
    } else {
        body.appendChild(table);
        table.innerHTML = '';
        for (var i = 0; i < +inputX.value; i++) {
            var tr = document.createElement('tr');
            for (var j = 0; j < +inputY.value; j++) {
                var td = document.createElement('td');
                if (i % 2 === j % 2) {
                    td.className = 'black';
                }
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
    }
}

table.addEventListener('click', changeColor);

function changeColor(event) {
    var target = event.target;
    var tdCollection = document.getElementsByTagName('td');
    if (target.tagName != 'TD') {
        return
    } else {
        for (var i = 0; i < +inputX.value * +inputY.value; i++) {
            tdCollection[i].classList.toggle('black');
        }
    }
}

