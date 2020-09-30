// 位移运算符： 将目标数据转换成二进制数据，然后移动指定的位数

let num = 3;
// 0000 0011
// 000000 00
// 00000 001
console.log(num>>>2);
console.log(num>>>1);
// 0000 0100

// >>>0 右移零位 会将非number数据强制转换成number

let a = 'abc'
// a = !!a;
if(!!!a){

}
