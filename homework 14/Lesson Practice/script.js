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


secondPar.onclick = function (event) {
    var target = event.target;
    event.preventDefault();

    if (target.tagName != 'A') {
        return;
    } else {
        var key = target.innerHTML;
        if (localStorage[key] === undefined) {
            localStorage.setItem(target.innerHTML, JSON.stringify({Path: target.getAttribute('href')}));
            alert('Ссылка добавлена');
        } else {
            alert(JSON.parse(localStorage[key]).Path)
        }
    }
};

