var express = require('express');
var router = express.Router();

module.exports = (app)=>{
  router.get('/', (req, res)=>{
    res.send({ title: 'Express' });
  })
  router.get('/', (req, res)=>{
    res.send({ title: 'Express' });
  })





  app.use('/',router);
}

