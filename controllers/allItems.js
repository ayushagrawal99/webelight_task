const db = require('../models/index');

module.exports = {
    allItem : async (req, res, next) => {
        try {
            // Filter
            let where = {};
            if(req.query.category){
                where.category = req.query.category;
            }
            if(req.query.name){
                where.name = req.query.name;
            }
            if(req.query.price){
                where.price = req.query.price;
            }

            // Fetch Data.
            let itemData = await db.items.findAll({
                offset : parseInt(req.query.offset) || 0,
                limit : parseInt(req.query.limit) || 5,
                where : where,
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


