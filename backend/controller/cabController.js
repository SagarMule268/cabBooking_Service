const cabModel = require('../model/cabModel');

const bookCab = async (req, res) => {
    try {
        const{client_name ,pickup_location ,drop_location , cab_type ,book_date,book_time} = req.body;    
        const cab = new cabModel({client_name ,pickup_location ,drop_location , cab_type ,book_date,book_time});
        await cab.save();
        res.status(201).json({
            message: 'cab booked succesfully!',
            data: cab
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports={bookCab};