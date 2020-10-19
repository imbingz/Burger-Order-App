/* IMPORT ORM
 ============================================================================================== */
const orm = require('../config/orm');


/* CREATE BURGER QUERY WITH ORM TEMPLATE
 ============================================================================================== */

const burger = {
   
  select: (cb) => {
    orm.selectAll("burgers", (res) => {
      cb(res)
    })
  }, 
  //cols, vals are arrays 
  insert: (cols, vals, cb) => {
    orm.insertOne("burgers", cols, vals, (res) => {
      cb(res); 
    })
  },
  //objColVals is object
  update: (objColVals, condition, cb) => {
    orm.updateOne("burgers", objColVals, condition, (res) => {
      cb(res)
    })
  }, 

}
 
module.exports = burger; 



