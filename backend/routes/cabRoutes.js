const express = require('express');
const router = express.Router();
const {bookCab}= require('../controller/cabController');

router.route('/').post(bookCab);


module.exports = router;