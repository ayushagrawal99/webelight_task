const db = require('../models/index');
const bcrypt = require('bcryptjs');

module.exports = {
    logIn: async (req,res) => {
        // fetch user Data.
        let userData = await db.users.findOne({
            where : {
                [db.Sequelize.Op.or]: [
                    { email:  req.body.email || null},
                    { username : req.body.username}
                ],
            }
        });

        // Check user.
        if(userData){
            let check = await bcrypt.compare(req.body.password, userData.password);
            if(check){
                res.status(200).json({status : true, msg : "Successfully login."});
                return;
            } else {
                res.status(200).json({status : false, msg : "Invalid password."});
                return;
            }
        } else {
            // user not found.
            res.status(200).json({status : false, msg : "Invalid username or email."});
            return;
        }
    }
};