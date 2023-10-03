// import expressjs
const express = require('express');

// define router
const router = express.Router();

// import controller
const testimonialController = require('../controllers/testimonial.controllers');

// define routes
router.post('testimonial', testimonialController.getAllTestimonial);    // get all testimonial
router.post('testimonial/:id', testimonialController.getTestimonialById); // get testimonial by id

// export router
module.exports = router;