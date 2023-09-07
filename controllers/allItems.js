const db = require('../models/index');

module.exports = {
    allItem : async (req, res, next) => {
        try {
            // Fetch Data.
            let itemData = await db.items.findAll({
                offset : parseInt(req.query.offset) || 0,
                limit : parseInt(req.query.limit) || 5,
                raw : true
            });

            if(itemData && itemData.length > 0){
                res.status(200).json({data : itemData});
                return;
            } else {
                res.status(403).json({msg : 'No itemData found.'});
                return;
            }
        } catch (error) {
            console.error(error);
            res.status(401).json({msg : error || 'something went wrong!'});
            return;
        }
    }   
}


