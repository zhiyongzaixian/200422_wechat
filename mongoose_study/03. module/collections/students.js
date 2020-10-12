const mongoose = require('mongoose');

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

module.exports = Students;
