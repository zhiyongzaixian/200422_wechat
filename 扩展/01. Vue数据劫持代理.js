// 数据劫持代理： 组件实例   data
let data = {
  username: 'wade',
  age: 39
}


let _this = {

}

// 数据劫持代理
for(let item in data){
  Object.defineProperty(_this, item, {
    get(){ // 获取扩展属性值的时候调用
      console.log('get()');
      return data[item];
    },
    //
    set(newValue){ // 监视扩展属性
      console.log('set()');
      // 使用Object.defineProperty添加扩展属性的时候，千万不要在set方法中直接修改扩展属性的值，会导致死循环
      // _this.username = newValue;
      data[item] = newValue;
    }
  })
}

console.log(_this);

_this.username = 'curry';
console.log(_this.username);
// console.log(_this.username);
// _this.username = 'curry';
// console.log(_this.username);
