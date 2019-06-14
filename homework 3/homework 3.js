//Task 1

var styles = ['jazz', 'blues'];
styles.push('rock\'n\'roll');
styles[styles.length-2] = 'classic';
alert(styles.shift());
styles.unshift('rap', 'reggae' );

//Task 2

var i;
for(i = 2; i<=10; i+=2) {
    alert (i);
}

for (i = 2; i<=10; i++) {
    if (i % 2 == 0) {
        alert (i);
    }
}

//Task 3

    var obj = { name: 'valera'};
    //var key = Object.keys(obj);

  //  function isEmpty () {

    //    if ( key in obj) {
      //      return false
        //} else {return false}
//}
 function isEmpty() {
     for (var k in obj){
         return false;
     }
     { return true;
     }

 }
 isEmpty(obj);

 delete obj['name'];

 isEmpty(obj);






//Task 4
var arr= [];
while (true) {
    var i = prompt ('Enter number');
    if (i === '' || i === null || isNaN(i)) break;
    arr.push(+i);//загоняем в массив преобразуя в число
}

var sum = 0;

for (var j=0; j < arr.length; j++) {
    sum += arr[j];
}
alert ( sum );

//Task 5
nextStep:
for ( var i =2; i<10; i++){//перебор чисел
    for (var j = 2; j < i; j++)// перебор делителя
    {
        if (i % j == 0) {// остаток от деление, если нету - то число простое
            continue nextStep;
        }
        else {

        }
    }
    alert(i)
}