// toSting

console.log(Object.prototype);

// Array
console.log(Array.prototype);

let arr = [];
// arr1 = new Array();
// arr1.__proto__ === Array.prototype
//
// Array.prototype = new Object()
// arr1.__proto__ === Array.prototype(toString) ---> Array.prototype.__proto__ === Object.prototype(toString)

let arr2 = [1,2,3]
console.log(arr2.toString()); // 1,2,3

console.log(Object.prototype.toString.call(arr2).slice(8, -1));
let str = 'abc'
let num = 123;
console.log(Object.prototype.toString.call(str).slice(8, -1));
console.log(Object.prototype.toString.call(num).slice(8, -1));

