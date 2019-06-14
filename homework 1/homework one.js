// Changing values by entering a new variable
var a = 5, b = 10,
    c = a + b;
console.log(a + ' initial а')
console.log(b + ' initial b')

a = c - a;
b = c - b;
console.log(a + ' new а');
console.log(b + ' new b');

//Changing values without introducing a new variable
var a = 5, b = 10;
console.log(a + ' initial а')
console.log(b + ' initial b')
a = a + b;
b = a - b;
a = a - b;
console.log(a + ' new а');
console.log(b + ' new b');

