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

