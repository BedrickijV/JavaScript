localStorage.clear();
var container = document.getElementById('container');
var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 1</a> and <a href="http://google.by">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="http://onliner.by">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var mainButton = document.getElementsByTagName('button');
var fpChildren = firstPar.children;
mainButton[0].addEventListener('click', changeColorAndWeight, false);

function changeColorAndWeight() {
    for (var i = 0; i < fpChildren.length; i++) {
        fpChildren[i].className = 'aFont';
    }
}


var link3 = document.getElementsByTagName('a')[2];
var link4 = document.getElementsByTagName('a')[3];

link3.addEventListener('click', pushOrGetLink3, false);

function pushOrGetLink3(event) {
    event.preventDefault();
    if (localStorage.link1 === undefined) {
        localStorage.link1 = JSON.stringify({Path: link3.getAttribute('href')});
        alert('Ссылка сохранена!');
    } else {
        alert(localStorage.link1);
    }

}

link4.addEventListener('click', pushOrGetLink4, false);

function pushOrGetLink4(event) {
    event.preventDefault();
    if (localStorage.link2 === undefined) {
        localStorage.link2 = JSON.stringify({Path: link4.getAttribute('href')});
        alert('Ссылка сохранена!');
    } else {
        alert(localStorage.link2);
    }

}


