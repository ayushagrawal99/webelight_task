const db = require('../models/index');
const bcrypt = require('bcryptjs');

module.exports = {
    signUp : async (req, res, next) => {
        try {
            // Password Secure
            const salt = bcrypt.genSaltSync(10);
            const securePassword = bcrypt.hashSync(req.body.password, salt);

            // Data preparation
            const data = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                username: req.body.username,
                email: req.body.email,
                password: securePassword,
                is_admin: req.body.is_admin,
            }

            // Fetch Data.
            const userData = await db.users.findOne({
                where : {
                    [db.Sequelize.Op.or] : {
                        username: req.body.username || null,
                        email: req.body.email || null,
                    }
                }
            });

            if(userData){
                // User Already Exit
                res.status(403).json({msg : 'User already exits.'});
                return;
            } else {
                await db.users.create(data);
                res.status(201).json({msg : 'Sign-up successfully.'});
                return;
            }
        } catch (error) {
            console.error(error);
            res.status(401).json({msg : error || 'something went wrong!'});
            return;
        }
    }     
}


