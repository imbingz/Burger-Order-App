/* IMPORT ORM
 ============================================================================================== */
const orm = require('../config/orm');


/* CREATE BURGER QUERY WITH ORM TEMPLATE
 ============================================================================================== */

const burger = {
   
  selectAll: (cb) => {
    orm.selectAll("burgers", (res) => {
      cb(res)
    })
  }, 
  //cols, vals are arrays 
  insertOne: (cols, vals, cb) => {
    orm.insertOne("burgers", cols, vals, (res) => {
      cb(res); 
    })
  },
  //objColVals is object
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
 
module.exports = burger; 



