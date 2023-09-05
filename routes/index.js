const express = require('express');
const router = express.Router();
const signUp = require('../controllers/signUp');
const logIn = require('../controllers/login');

// Test route
router.post(
    '/sign-up',
    signUp.signUp
);

// Log-in route
router.post(
    '/log-in',
    logIn.logIn
);

module.exports = router;