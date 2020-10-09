
// indexOf查找子串的下标
let str = 'asdfabchhh';
console.log(str.indexOf('s')); // 1
console.log(str.indexOf('a')); // 0
console.log(str.indexOf('abc')); // 4
console.log(str.indexOf('abcd')); // -1

// search(string | reg)
console.log(str.search('abc')); // 4
console.log(str.search(/abc/)); // 4
console.log(str.search(/abcd/));

// match() 返回值是一个数组
console.log(str.match('abc')); // 4
console.log(str.match(/abc/)); // 4
console.log(str.match(/abcd/)); // null


let arr = ["NMTID=00O8LJlHTAawIAR10y5hboCPA0D9g8AAAF03hFOPQ; Expires=Sat 28-Sep-2030 08:11:50 GMT; Path=/","MUSIC_U=dd1e20826b21763258367a135c6327d6f052e7a49151bb641f375feaa7ffebaa0931c3a9fbfe3df2; Expires=Thu 15-Oct-2020 08:11:50 GMT; Path=/","__remember_me=true; Expires=Thu 15-Oct-2020 08:11:50 GMT; Path=/","__csrf=8adf24190dd1ac356bc85d903f3fd89b; Expires=Thu 15-Oct-2020 08:12:00 GMT; Path=/"]
let result = arr.find(item => {
  console.log(item.indexOf('MUSIC_U'));
  return item.indexOf('MUSIC_U') !== -1
})
console.log(result);
let num = -1;
let num1 = 0;
console.log(!!num);
console.log(!!num1);
