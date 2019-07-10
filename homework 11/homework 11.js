//Task 1
function filterArr(n, i, arr) {
    return n > 0;
}

var arr = [-1, 0, 2, 34, -2];

arr.filter(filterArr);

//Task 2
function findArr (n, i, arr) {
    return n > 0;
}
var arr = [-1, 0, 2, 34, -2];

arr.find(findArr);

//Task 3

function isPalindrome(str) {
    return str.toLowerCase() == str.toLowerCase().split('').reverse().join('');
}
isPalindrome('анна');
isPalindrome('Анна');
isPalindrome('Анма');
isPalindrome('анма');

//Task 4

function areAnagrams(str, str1) {
    return str.toLowerCase().split('').sort().join('') == str1.toLowerCase().split('').sort().join('');
}
areAnagrams('кот', 'отк');
areAnagrams('кот', 'атк');
areAnagrams('кот', 'отко');

//Task 5

function divideArr (arr, numbOfParts) {
    var newArr =[];
    for (var i = 0; i<arr.length; i+=numbOfParts){
        newArr.push(arr.slice(i,i+numbOfParts))
    }
    return newArr
}

divideArr([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]




