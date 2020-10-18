/* IMPORT MODULES 
 ============================================================================================== */

const express = require('express');
const burger = require('../models/burger');

const router = express.Router(); 


/* SETUP ROUTES 
 ============================================================================================== */

//Get route
router.get('/', (req, res) => {
  burger.seletAll(data => {
    const hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//Post route
router.post('/api/burgers', (req, res) => {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    (result) => {
      //send back ID of the new burger
      res.json({ id: result.insertId });
    }
  );
});