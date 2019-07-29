var mainButton = document.getElementById('mainButton');
var block = document.createElement('div');
var container = document.getElementById('container');
var infoBlock = document.createElement('div');
var photoBlock = document.createElement('div');
var infoBlockChildren = infoBlock.children;


mainButton.addEventListener('click', getData, false);

function getData() {
    block.innerHTML='';
    infoBlock.innerHTML='';
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'https://reqres.in/api/users?page=2', false);
    try{
    xhr.send();
    } catch (e) {
        block.className = 'error';
        block.innerHTML = "<p>Ошибка получения данных (проверьте запрос).</p>";
        container.appendChild(block);
    }
    var userObj = JSON.parse(xhr.response).data;

    for (var i = 0; i < userObj.length; i++) {
        var userButton = document.createElement('button');
        userButton.innerHTML = "User " + (i + 1);
        block.appendChild(userButton);
    }
    block.className = 'status';
    block.id = "statusBlock";
    container.appendChild(block);
    infoBlock.className = 'infoBlock';
    container.appendChild(infoBlock);
    for (i = 0; i < 2; i++) {
        var innerBlock = document.createElement('div');
        innerBlock.className = 'innerBlock';
        infoBlock.appendChild(innerBlock);
    }
    photoBlock.className = 'photoBlock';
    infoBlock.firstChild.appendChild(photoBlock);
    for (i = 0; i < 2; i++) {
        var innerBlock = document.createElement('div');
        innerBlock.className = 'userInfoBlock';
        infoBlock.lastChild.appendChild(innerBlock);
    }
    var buttons = block.children;
    buttons[0].classList.toggle('active');
    photoBlock.innerHTML = '<img src=' + userObj[0].avatar + '>';

    infoBlockChildren[1].firstChild.innerHTML = '<p> First Name: ' + userObj[0].first_name + '</p>';
    infoBlockChildren[1].lastChild.innerHTML = '<p> Last Name: ' + userObj[0].last_name + '</p>';

    var statusBlock = document.getElementById('statusBlock');
    statusBlock.addEventListener('click', userInfo, false);

    function userInfo(event) {
        var target = event.target;
        var allButtons = document.getElementsByTagName('button');
        for (var i = 0; i < allButtons.length; i++) {
            allButtons[i].classList.remove('active');
        }
        target.className = 'active';

        var number = +target.innerHTML.split(' ')[1] - 1;
        photoBlock.innerHTML = '<img src=' + userObj[number].avatar + '>';
        infoBlockChildren[1].firstChild.innerHTML = '<p> First Name: ' + userObj[number].first_name + '</p>';
        infoBlockChildren[1].lastChild.innerHTML = '<p> Last Name: ' + userObj[number].last_name + '</p>';
    }

}






