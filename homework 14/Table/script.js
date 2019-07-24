var button = document.getElementById('button');
var table = document.getElementById('table');


button.addEventListener('click', addRow, false);

function addRow() {
    var row = document.createElement('tr');
    row.innerHTML = '<td></td><td></td><td></td>';
    table.insertBefore(row, table.children[0])
}

table.addEventListener("click", addInput, false);

function addInput(event) {
    var target = event.target;
    var value = target.innerHTML;
    var input = document.createElement('input');

    if (target.tagName !== 'TD' || target.id === 'button') {
        return
    } else {
        input.value = value;
        target.innerHTML = '';
        target.appendChild(input).focus();

        input.addEventListener('blur', deleteInput, false);

        function deleteInput() {
            target.innerHTML = input.value;
            input.remove();
        }
    }
}

