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
  
}
 




