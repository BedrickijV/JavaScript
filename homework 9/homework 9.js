var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};

function deepClone(obj) {
    // Проверка на число, строку, null, undefined
    if (obj == null || typeof (obj) != "object") {
        return obj;
    }

    // Проверка на массив
    if (Array.isArray(obj)) {
        var copy = [];
        for (var i = 0; i < obj.length; i++) {
            copy[i] = deepClone(obj[i]);
        }
        return copy;
    }

    // Проверка на объект
    if (typeof (obj) == 'object') {
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                copy[attr] = deepClone(obj[attr]);
            }
        }
    }
    return copy;

}

var clonedObj = deepClone(initialObj);
console.log(initialObj);
console.log(clonedObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);