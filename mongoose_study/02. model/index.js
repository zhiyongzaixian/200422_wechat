const mongoose  = require('mongoose');

// 1. 链接数据库
mongoose.connect('mongodb://localhost:27017/mongoose_demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});


// 2. 创建Schema对象， 对集合进行约束
const nbaStarsSchema = new mongoose.Schema({
  name:{
    type: String, // 数据类型
    unique: true, // 唯一性
    required: true // 必要性
  },
  age: Number,
  sex: {
    type: Number,
    default: 1
  },
  hobby: [String],
  info: mongoose.SchemaTypes.Mixed, // 支持任意数据类型
  isDeleted: {
    type: Boolean,
    default: false
  }
})

// 3. 创建model对象
const NbaStars = mongoose.model('NBAStars', nbaStarsSchema);

// 4. 通过model对象向数据库插入数据
;(async function () {
  try{
    // let result = await NbaStars.create({
    //   name: 'anverson',
    //   age: 44,
    //   hobby: ['basketball'],
    //   info: '76人'
    // })
    
    // let result = await NbaStars.find({name: 'curry'})
    // let result = await NbaStars.findOne({name: 'curry'});
    // 软删除
    // let result = await NbaStars.updateMany({}, {$set: {isDeleted: false}});
    
    let result = await NbaStars.updateOne({name: 'anverson'}, {$set: {isDeleted: true}})
    console.log(result);
  }catch (e) {
    console.log('保存数据失败');
    console.log(e);
  }
})()

