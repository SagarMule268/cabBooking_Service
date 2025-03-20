const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const mongoDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGOURL
           
        );
        console.log('MongoDB connected');
    }
    catch(err){
        console.error(err);
    }
}
module.exports = mongoDB;
// The code snippet above is a function that connects to MongoDB. It uses the MONGO_URI environment variable from the .env file to connect to the MongoDB database. The function is exported so that it can be used in other files. The function is then imported in the index.js file to connect to the MongoDB database when the server starts.