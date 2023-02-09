var express = require('express');
var router = express.Router();
const empController = require('../controllers/employee.controllers');
/* GET users listing. */
router.get('/get',empController.getAllemp);
router.post('/create',empController.createEmp);
router.post('/update',empController.updateEmp);
router.post('delete',empController.deleteEmp);
module.exports = router;
