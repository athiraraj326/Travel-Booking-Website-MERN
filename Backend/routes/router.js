const express = require('express')
const userController = require('../controllers/userController')
const tourController = require('../controllers/tourController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const reviewController = require('../controllers/reviewController')

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

// get all home tours
router.get('/home-tours',tourController.getHomeTourController)

// add review
router.post('/:tourId/add-review',jwtMiddleware,reviewController.addReviewController)

// get tour review
router.get('/:tourId/all-reviews',jwtMiddleware,reviewController.getTourReviewController)

module.exports = router