/* IMPORT MYSQL CONNECTION
 ============================================================================================== */
const connection = require('../config/connection');


/* CREATE ORM OBJ WITH METHODS FOR DATABASE
 ============================================================================================== */
const orm = {
  //select all from the table
  selectAll: (table, cb) => {
    let query = "SELECT * FROM " + table + ";";

    connection.query(query, (err, result) => {
      if (err) throw err
    })
    cd(result)
  }
}