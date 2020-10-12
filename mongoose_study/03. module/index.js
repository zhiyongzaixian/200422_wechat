require('./db');

const StudentsModel = require('./collections/students');
const NbaStarsModel = require('./collections/nbsStars');


(async function () {
  try{
    StudentsModel.create({
      name: 'xiaoming',
      age: 18,
      hobby: ['study'],
      info: 'student'
    })
  
    NbaStarsModel.create({
      name: 'curry',
      age: 33,
      hobby: ['study'],
      info: '小学生'
    })
  }catch (e) {
    console.log(e);
  }
})()
