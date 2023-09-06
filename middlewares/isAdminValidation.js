const jwt = require('jsonwebtoken');
const config = require('../config/config');
const secretKey = config.secretKey;
const db = require('../models/index');

const isAdminValidation = () => {
    return (req, res, next) => {
        // Get Token.
        const bearerToken = req.headers['authorization'];

        if(typeof bearerToken !== 'undefined'){
            const bearer = bearerToken.split(" ");
            const token = bearer[1];

            // Verify Token
            jwt.verify(token, secretKey, async (err, authData) => {
                if(err){
                    // Token is not verified.
                    next({
                        status : 403, 
                        msg : "Token is not valid."
                    })
                } else {
                     // fetch user Data.
                    let userData = await db.users.findOne({
                        where : {
                            id : authData.id,
                        },
                        raw: true
                    });

                    if(userData && userData.is_admin){
                        next();
                    } else {
                        next({
                            status : 403, 
                            msg : "Don't have Admin rights"
                        })
                    }
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
module.exports = isAdminValidation;
