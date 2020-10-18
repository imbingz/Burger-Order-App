/* IMPORT ORM
 ============================================================================================== */
const orm = require('../config/orm.js');


/* CREATE BURGER QUERY WITH ORM TEMPLATE
 ============================================================================================== */

const burger = {
   
  selectAll: (cb) => {
    orm.selectAll("burgers", (res) => {
      cd(res)
    })
  }, 

  insertOne: (cols, vals, cb) => {
    orm.insertOne("burgers", cols, vals, (res) => {
      cb(res); 
    })
  },
  
  updateOne: (objColVals, condition, cb) => {
    orm.updateOne("burgers", objColVals, condition, (res) => {
      cb(res)
    })
  }, 

  deleteOne: (condtion, cb) => {
    orm.deleteOne("burgers", condtion, (res) => {
      cb(res);
    })
  }
}
 




