/* IMPORT MYSQL CONNECTION
 ============================================================================================== */
const connection = require('../config/connection');


/* CREATE ORM HELPER FUNCTIONS
 ============================================================================================== */
 
//Create QuestionMark Function

function createQmarks(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString(); 
}







/* CREATE ORM OBJ WITH METHODS FOR DATABASE
 ============================================================================================== */
const orm = {
  //select all from the table
  selectAll: (table, cb) => {
    let queryStr = "SELECT * FROM " + table + ";";

    connection.query(queryStr, (err, result) => {
      if (err) throw err
    })
    cd(result)
  },

  //insert method
  insertOne: (table, cols, vals, cb) => {
    let queryStr = "INSERT INTO " + table + "(" + cols.toString + ")" + "VALUES (" + createQmarks(vals.length) + ");";

    console.log(queryStr);
    connection.query(queryStr, (err, result) => {
      if (err) throw err;
    });
    cd(result)
  }, 

  //update method 
  updateOne: (table, objColVals, condition, cb) => {
    let queryStr = "UPDATE " + table + " SET " + translateSql(objColVals) + " WHERE " + condition; 

    connection.query(queryStr, (err, result) => {
      if (err) throw err;
    })
    cd(result)
  },

  //delete method
  deleteOne: (table, condtion, cb) => {
    let queryStr = "DELETE FROM " + table + " WHERE " + condtion;
     
    connection.query(queryStr, (err, result) => {
      if (err) throw err;
    });
    cd(result)
  }
}