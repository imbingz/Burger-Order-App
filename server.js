/* IMPORT MODULES AND SETUP SERVER
 ============================================================================================== */

const express = require('express');
const app = express(); 

const PORT = process.env.PORT || 3000;






app.listen(PORT, () => {
  console.log('Server listening on http://localhost:' + PORT);
})