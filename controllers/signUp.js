const db = require('../models/index');

module.exports = {
    signUp : async (req, res, next) => {
        try {
            res.status(200).json({msg : 'Test Route.'});
            return;
        } catch (error) {
            console.error(error);
            res.status(401).json({msg : error || 'something went wrong!'});
            return;
        }
    }   
}


