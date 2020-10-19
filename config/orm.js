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


//Create translate object to query string
function translateSql(obj) {
  let arr = [];

  for (let key in obj) {
    value = obj[key];
    if (Object.hasOwnProperty.call(obj, key)) {
      // if string with spaces, add quotations 
      if (typeof value === "string" && value.indexOf(" " >= 0)) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value)
    }
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
      if (err) throw err; 
      cb(result)
    })
  },

  //insert method
  insertOne: (table, cols, vals, cb) => {
    let queryStr = "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + createQmarks(vals.length) + ") ";

    console.log(queryStr);
    connection.query(queryStr, vals, (err, result) => {
      if (err) throw err;
      cb(result)
    });
  }, 

  //update method 
  updateOne: (table, objColVals, condition, cb) => {
    let queryStr = "UPDATE " + table + " SET " + translateSql(objColVals) + " WHERE " + condition; 

    connection.query(queryStr, (err, result) => {
      if (err) throw err;
      cb(result)
    })
  },

}


/* EXPORT MODULE
 ============================================================================================== */
module.exports = orm; 