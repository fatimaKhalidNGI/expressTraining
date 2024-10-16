const express = require('express');
const router = express.Router();

const sampleController = require('../controllers/sampleController');
const sampleMW = require('../middlewares/sampleMWDisplay');
const validateMW = require('../middlewares/validateInput');
const {sampleLogin} = require('../controllers/userLogin');
const accessGrantedController = require('../controllers/accessGrantedController');
const { verifyJWT } = require('../middlewares/verifyJWT');
const { refreshToken } = require('../controllers/refreshTokenController');
const { dataValidation_joi } = require('../middlewares/validateInput_joi');

router.get('/home', sampleController.getData);

//route with express-validator input validation + sanitization
//router.post('/post', validateMW, sampleController.postData);

//route with joi input validation and sanitization
router.post('/post', dataValidation_joi, sampleController.postData);

router.post('/login', sampleLogin);

router.get('/refresh', refreshToken);

router.use(verifyJWT);
router.get('/accessCheck', accessGrantedController.accessRole);

module.exports = router;