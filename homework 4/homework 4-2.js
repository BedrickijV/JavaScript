// var test = [ 5, 7, [ 4, [2], 8, [1, 3], 2], [9, [] ], 1, 8 ];
//
// function treeSum(array) {
//     var result = 0;
//
//     if (typeof array === "object" && array.length !== "undefined") {
//         for (var i = 0; i < array.length; i++){
//             result += treeSum(array[i]);
//         }
//     } else {
//         return array;
//     }
//
//     return result;
// }
// console.log (treeSum(test))

var test = [ 5, 7, [ 4, [2], 8, [1, 3], 2], [9, [] ], 1, 8 ];

function treeSum(array) {
    var result = 0;

    if (typeof array === "object" && array.length !== "undefined") {
        for (var i = 0; i < array.length; i++){
            result += treeSum(array[i]);
        }
    } else if (typeof array === "number" && !isNaN(array)){
        return array;
    }

    return result;
}
console.log (treeSum(test))