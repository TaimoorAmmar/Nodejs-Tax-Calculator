const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();
const {calculateTax} = require('../util/function.js');
const fs = require('fs');

router.get('/taxReturn', (req, res, next) => {
  res.render('taxReturn', {
    pageTitle: "Tax Return"
})
});

router.post('/taxReturn', (req, res, next) => {
  const salary = req.body.tax;
  console.log("salary is ",salary)
  const tax = calculateTax(salary);
  console.log("tax is ", tax);
  if(tax==0){
    res.send(`<h1>There is no tax on salaries below 1 lac</h1>`)
  }
  else {
  res.send(`<h1>Calculated Tax Amount is $${tax}</h1>`)
  }
  fs.writeFileSync("taxReturn.txt", tax.toString());
  
});

module.exports = router;








