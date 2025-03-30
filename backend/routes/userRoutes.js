const express = require('express');
const authenticateUser = require('../middleware/authmiddleware');
const router = express.Router();
const {addUsers,getAllUsers ,getUserById ,loginUser ,logoutUser } = require('../controller/userController');
router.route('/').get(getAllUsers).post(addUsers);
router.route('/:id').get(getUserById);
router.route('/login').post(loginUser);
router.route('/logout').post(logoutUser);
router.get('/me',authenticateUser , getUserById);
module.exports = router;
// The code snippet above is a router that handles the user routes. 
// It imports the user model and the user controller functions. 
// It defines a route for getting all users and adding a new user. 
// The router is then exported so that it can be used in the index.js file to define the user routes.