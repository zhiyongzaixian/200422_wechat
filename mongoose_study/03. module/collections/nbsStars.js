const mongoose = require('mongoose');


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

module.exports = NbaStars;
