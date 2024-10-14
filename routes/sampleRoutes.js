const express = require('express');
const router = express.Router();

const sampleController = require('../controllers/sampleController');
const sampleMW = require('../middlewares/sampleMWDisplay');
const validateMW = require('../middlewares/validateInput');
const {sampleLogin} = require('../controllers/userLogin');
const accessGrantedController = require('../controllers/accessGrantedController');
const { verifyJWT } = require('../middlewares/verifyJWT');

router.get('/get', sampleController.getData);
router.post('/post', validateMW, sampleController.postData);
router.get('/redirect', sampleController.redirectexample);
router.get('/sampleMW', sampleMW, sampleController.getData);
router.post('/login', sampleLogin);

router.use(verifyJWT);
router.get('/accessAdmin', accessGrantedController.accessGranted_admin);
router.get('/accessStaff', accessGrantedController.accessGranted_staff);
router.get('/accessUser', accessGrantedController.accessGranted_users);


module.exports = router;