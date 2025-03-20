const express = require('express');
const UserModel = require('../model/userModel');
const router = express.Router();
const {addUsers,getAllUsers ,getUserById ,loginUser } = require('../controller/userController');

router.route('/').get(getAllUsers).post(addUsers);
router.route('/:id').get(getUserById);
router.route('/login').post(loginUser);

module.exports = router;
// The code snippet above is a router that handles the user routes. 
// It imports the user model and the user controller functions. 
// It defines a route for getting all users and adding a new user. 
// The router is then exported so that it can be used in the index.js file to define the user routes.