const express = require('express')
const userController = require('../controllers/userController')
const tourController = require('../controllers/tourController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const reviewController = require('../controllers/reviewController')
const messageController = require('../controllers/messageController')
const bookingController = require('../controllers/bookingController')

const router = new express.Router()

// register : http://localhost:3000/register
router.post('/register',userController.registerController)

// login : http://localhost:3000/login
router.post('/login',userController.loginController)

// get all tours
router.get('/all-tours',tourController.getTourListController)

// get single tour
router.get('/tour/:id/view',tourController.getSingleTourController)

// get all home tours
router.get('/home-tours',tourController.getHomeTourController)

// add review
router.post('/:tourId/add-review',jwtMiddleware,reviewController.addReviewController)

// get tour review
router.get('/:tourId/all-reviews',reviewController.getTourReviewController)

// add message
router.post('/add-message',messageController.addMessageController)

// get all users
router.get('/all-users',jwtMiddleware,userController.getAllUserController)

// get home tour search
router.get('/search-result/:location',tourController.getHomeSearchTourController)

// add tour
router.post('/add-tour',jwtMiddleware,tourController.addTourController)

// delete tour
router.delete('/tour/:id/delete',jwtMiddleware,tourController.deleteTourController)

// edit tour
router.put('/tour/:id/edit',jwtMiddleware,tourController.editTourController)

// get booking tour details
router.get('/tour/:id/booking',bookingController.getBookingTourController)

// create razorpay order
router.post('/orders',jwtMiddleware,bookingController.razorpayCreateOrderController)

// validate  razorpay payment
router.post('/validatePayment',bookingController.paymentValidateController)

// add booking details
router.post('/:id/add-booking',jwtMiddleware,bookingController.addBookingDetailsController)

// get user bookings
router.get('/user/bookings',jwtMiddleware,bookingController.getUserBookingsController)

// get user bookings
router.get('/all-bookings',jwtMiddleware,bookingController.getAllBookingsController)

module.exports = router