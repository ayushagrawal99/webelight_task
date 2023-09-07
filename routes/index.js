const express = require('express');
const router = express.Router();
const signUp = require('../controllers/signUp');
const logIn = require('../controllers/login');
const userData = require('../controllers/userData');
const items = require('../controllers/items');
const { signupSchema, logInSchema, itemSchema } = require('../requests/validationSchema');
const validationMiddleware = require('../middlewares/validationMiddleware');
const tokenVerification = require('../middlewares/tokenVerification.js');
const isAdminValidation = require('../middlewares/isAdminValidation');

// Test route
router.post(
    '/sign-up',
    validationMiddleware(signupSchema),
    signUp.signUp
);

// Log-in route
router.post(
    '/log-in',
    validationMiddleware(logInSchema),
    logIn.logIn
);

// All users route
router.get(
    '/all-users',
    isAdminValidation(),
    userData.userData
);

// All users route
router.post(
    '/create-item',
    validationMiddleware(itemSchema),
    isAdminValidation(),
    items.itemCreate
);

module.exports = router;