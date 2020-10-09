// 上海自来水来自海上

let str = '上海自来水来自海上';
let str3 = '上海自来水来自海上2';
let str2 = str.split('').reverse().join('')

function isHuiWen(str) {
  return str.split('').reverse().join('') === str;
}

let isHuiWen2 = str => str.split('').reverse().join('') === str;

console.log(isHuiWen(str));
console.log(isHuiWen(str3));



