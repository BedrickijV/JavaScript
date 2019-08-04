var body = document.body;
var mainButton = document.getElementById('mainButton');
var additionalButtons = document.createElement('div');
var saveContainer = document.createElement('div');
var spanList = document.getElementsByTagName('span');
var spanTenMins = spanList[0];
var spanMins = spanList[1];
var spanTenSecs = spanList[3];
var spanSec = spanList[4];
var spanTenMs = spanList[6];
var spanMs = spanList[7];
var tenMins = 0;
var mins = 0;
var tenSecs = 0;
var secs = 0;
var tenMs = 0;
var ms = 0;
var logic = 0;
var i = 1;
var saveButton;

mainButton.addEventListener('click', mainButtonState, false);

function mainButtonState() {
    if (mainButton.getAttribute('data-state') === 'start') {
        logic = setInterval(mainLogic, 10);
        additionalButtons.setAttribute('class', 'buttons');
        additionalButtons.innerHTML = '<button id="reset">Reset</button><button id="save">Save</button>';
        body.appendChild(additionalButtons);
        saveContainer.setAttribute('class', 'save-container');
        body.appendChild(saveContainer);
        mainButton.setAttribute('data-state', 'pause');
        mainButton.innerHTML = 'Pause';

    } else if (mainButton.getAttribute('data-state') === 'pause') {
        clearInterval(logic);
        mainButton.setAttribute('data-state', 'resume');
        mainButton.innerHTML = 'Resume';

    } else if (mainButton.getAttribute('data-state') === 'resume') {
        logic = setInterval(mainLogic, 10);
        mainButton.setAttribute('data-state', 'pause');
        mainButton.innerHTML = 'Pause';
    }
    saveButton = document.getElementById('save');
    var resetButton = document.getElementById('reset');

    saveButton.addEventListener('click', saveTime, false);
    resetButton.addEventListener('click', resetTime, false);
}

function saveTime() {

    var currentTime = i + ') ' + spanTenMins.innerHTML + spanMins.innerHTML + ' : ' + spanTenSecs.innerHTML + spanSec.innerHTML + ' : ' + spanTenMs.innerHTML + spanMs.innerHTML;
    i++;
    var currentTimeContainer = document.createElement('div');
    currentTimeContainer.setAttribute('class', 'current-time');
    currentTimeContainer.innerHTML = currentTime;
    saveContainer.appendChild(currentTimeContainer);

}

function resetTime() {
    clearInterval(logic);
    mainButton.setAttribute('data-state', 'start');
    mainButton.style.display = 'block';
    mainButton.innerHTML = 'Start';
    saveContainer.innerHTML = '';
    additionalButtons.innerHTML = '';
    tenMins = 0;
    mins = 0;
    tenSecs = 0;
    secs = 0;
    tenMs = 0;
    ms = 0;
    logic = 0;
    i = 1;
    spanTenMins.innerHTML = tenMins;
    spanMins.innerHTML = mins;
    spanTenSecs.innerHTML = tenSecs;
    spanSec.innerHTML = secs;
    spanTenMs.innerHTML = tenMs;
    spanMs.innerHTML = ms;
}

function mainLogic() {
    if (ms === 10) {
        ms = 0;
        tenMs++;
        if (tenMs === 10) {
            tenMs = 0;
            secs++;
            if (secs === 10) {
                secs = 0;
                tenSecs++;
                if (tenSecs == 6) {
                    tenSecs = 0;
                    mins++;
                    if (mins === 10) {
                        mins = 0;
                        tenMins++;
                        if (tenMins === 6) {
                            clearInterval(logic);
                            mainButton.style.display = 'none';
                            saveButton.remove();
                        }
                        spanTenMins.innerHTML = tenMins;
                    }
                    spanMins.innerHTML = mins;
                }
                spanTenSecs.innerHTML = tenSecs;
            }
            spanSec.innerHTML = secs;
        }
        spanTenMs.innerHTML = tenMs;
    }
    spanMs.innerHTML = ms;
    ms++;
}


