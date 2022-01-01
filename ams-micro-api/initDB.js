const mongoose = require("mongoose")
const logger = require('./shared/logger/winston-logger');

const mongo_uri= process.env.MONGODB_URI;


module.exports = async () => {

    try {
        await mongoose.connect(mongo_uri);
        console.log('');
        console.log('|****************************************************|');
        console.log('|-----------mongo db connected succesfully ----------|');
        console.log('|****************************************************|');
        console.log('');
        logger.info("mongo db connected succesfully")
    } catch (err) {
        logger.error('DB connection error: ' + err)
    }
}