const express = require('express')
const userController = require('../controllers/userController')
const tourController = require('../controllers/tourController')

const router = new express.Router()

// register : http://localhost:3000/register
router.post('/register',userController.registerController)

// login : http://localhost:3000/login
router.post('/login',userController.loginController)

// add tours

// get all tours
router.get('/all-tours',tourController.getTourListController)

// get single tour
router.get('/tour/:id/view',tourController.getSingleTourController)

module.exports = router