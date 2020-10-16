/* IMPORT MODULES AND SETUP SERVER
 ============================================================================================== */

const express = require('express');

const connection = require('./config/connection')

const app = express(); 

const PORT = process.env.PORT || 3000;

//Serve static content for the app from the 'Public' directory in the app directory 
app.use(express.static("public"));








app.listen(PORT, () => {
  console.log('Server listening on http://localhost:' + PORT);
})