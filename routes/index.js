const express = require('express');
const router = express.Router();
const signUp = require('../controllers/signUp');

// Test route
router.get(
    '/test',
    signUp.signUp
);

module.exports = router;