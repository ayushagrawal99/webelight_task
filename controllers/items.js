const db = require('../models/index');

module.exports = {
    itemCreate : async (req, res, next) => {
        try {
            // Data preparation
            const data = {
                name: req.body.name,
                category: req.body.category,
                price: req.body.price,
            }

            // Create Items.
            await db.items.create(data);

            res.status(201).json({msg : 'Item created successfully'});
            return;
        } catch (error) {
            console.error(error);
            res.status(401).json({msg : error || 'something went wrong!'});
            return;
        }
    }     
}


