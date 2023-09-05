const express = require('express');
const router = express.Router();
const signUp = require('../controllers/signUp');

// Test route
router.post(
    '/sign-up',
    signUp.signUp
);

module.exports = router;