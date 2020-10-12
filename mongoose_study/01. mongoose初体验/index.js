const mongoose  = require('mongoose');

// 1. 链接数据库
mongoose.connect('mongodb://localhost:27017/mongoose_demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});


// 2. 创建Schema对象， 对集合进行约束
const StudentsSchema = new mongoose.Schema({
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
  info: mongoose.SchemaTypes.Mixed // 支持任意数据类型
})

// 3. 创建model对象
const Students = mongoose.model('students', StudentsSchema);


// 4. 创建文档对象
const studentA = new Students({
  name: '郭德纲',
  age: 40,
  hobby: ['相声', '美女'],
  info: '德云社班主'
})



// 5. 将文档对象插入至数据库
studentA.save()
  .then(() => {
    console.log('保存数据成功');
  })
  .catch((err) => {
    console.log('保存数据失败');
    console.log(err);
  })
  













