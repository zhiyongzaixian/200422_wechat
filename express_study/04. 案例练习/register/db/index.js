const mongoose  = require('mongoose');

// 1. 链接数据库
mongoose.connect('mongodb://localhost:27017/register', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.connection.once('open', (err) => {
  if(err){
    console.log('链接数据库失败');
    console.log(err);
    return;
  }
  console.log('链接数据库成功');
})
