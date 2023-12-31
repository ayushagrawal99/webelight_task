const jwt = require('jsonwebtoken');
const config = require('../config/config');
const secretKey = config.secretKey;

const tokenVerification = () => {
    return (req, res, next) => {
        // Get Token.
        const bearerToken = req.headers['authorization'];

        if(typeof bearerToken !== 'undefined'){
            const bearer = bearerToken.split(" ");
            const token = bearer[1];

            // Verify Token
            jwt.verify(token, secretKey, (err, authData) => {
                if(err){
                    // Token is not verified.
                    next({
                        status : 403, 
                        msg : "Token is not valid."
                    })
                } else {
                    next();
                }
            });
        } else {
            next({
                status : 403, 
                msg : "Token is not valid."
            })
        }
    };
};
module.exports = tokenVerification;
