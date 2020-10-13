const mongoose = require('mongoose');

const StudentsSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

// 3. 创建model对象
const Students = mongoose.model('students', StudentsSchema);

module.exports = Students;
