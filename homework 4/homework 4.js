//Task 1
function pow(x,n){
    var result = x;
    for (var i =1; i < n; i++) {
        result*= x;
    }
    return result
}


while (true) {
    var x = prompt('Enter number');
    if (+x >= 1) {
        break;
    } else {
        alert('Error. Invalid value');
    }
}

while (true) {
    var n = prompt('Enter exponent');
    if (+n >= 1) {
        break;
    } else {
        alert('Error. Invalid value');
    }
    }

    alert (pow(x,n));

//Task 2
var test = [ 5, 7, [ 4, [2], 8, [1, 3], 2], [9, [] ], 1, 8 ];

// function treeSum( array, i = 0) {
//     if (isFinite(array)) {
//         return Number(array);
//     }
//     else if ( typeof array == 'object' && i <array.length ) {
//         return treeSum(array[i]) + treeSum(array, i+1);
//     } else {
//         return 0;
//     }
// }
// console.log (treeSum(test));

function treeSum (array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
          sum = sum + parseInt(array[i]);
    }
    console.log(sum)
}
    console.log (treeSum(test));


//Task 3

// С использованием цикла - Цикл получше рекурсии за счёт отсутсвия самой рекурсии(вызова функции внутри себя).

function sumTo (n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum+=i;
    }
    return sum
}
sumTo(10);

// С использованием рекурсии - самый медленный за счёт выполнения рекурсии (мы проходили что рекурсия саму по себе использовать не экономно по памяти...)

function sumTo(n) {
    if (n == 1) {
        return 1;
    } else {
        return n + sumTo(n - 1);
    }
}

sumTo(10);

// С использованием формулы арифметическй последовательности - самый быстрый за счёт простоты вычисления

function sumTo(n) {
    return n * (n + 1) / 2;
}

sumTo(10);

// Также гугл сказал что по рекурсии у интерпритатора есть ограничения в 10 000 операций (некоторые могут и больше), но моё мнение что 100 000 уже будет слишком много
// Upd. Хром и Мазила сказали что стак переполнен, что подвердило вышесказанные предположения