var body = document.body,
    mainButton = document.getElementById('mainButton'),
    additionalButtons = document.createElement('div'),
    saveContainer = document.createElement('div'),
    spanList = document.getElementsByTagName('span'),
    spanTenMins = spanList[0],
    spanMins = spanList[1],
    spanTenSecs = spanList[3],
    spanSec = spanList[4],
    spanTenMs = spanList[6],
    spanMs = spanList[7],
    tenMins = 0,
    mins = 0,
    tenSecs = 0,
    secs = 0,
    tenMs = 0,
    ms = 0,
    logic = 0,
    i = 1,
    saveButton;

mainButton.addEventListener('click', mainButtonState, false);

function mainButtonState() {

    switch (mainButton.getAttribute('data-state')) {
        case 'start':
            logic = setInterval(mainLogic, 10);
            additionalButtons.setAttribute('class', 'buttons');
            additionalButtons.innerHTML = '<button id="reset">Reset</button><button id="save">Save</button>';
            body.appendChild(additionalButtons);
            saveContainer.setAttribute('class', 'save-container');
            body.appendChild(saveContainer);
            mainButton.setAttribute('data-state', 'pause');
            mainButton.innerHTML = 'Pause';
            break;
        case 'pause':
            clearInterval(logic);
            mainButton.setAttribute('data-state', 'resume');
            mainButton.innerHTML = 'Resume';
            break;
        case 'resume':
            logic = setInterval(mainLogic, 10);
            mainButton.setAttribute('data-state', 'pause');
            mainButton.innerHTML = 'Pause';
            break;
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
                if (tenSecs === 6) {
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


