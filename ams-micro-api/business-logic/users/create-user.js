const User = require("../../persistent-models/users");
const logger = require("../../shared/logger/winston-logger");

const createUser = async (req, res) => {
    const userData = new User(req.body)

    try {
       const response = await userData.save();
       
      logger.debug(`new user ${response.email} sign-up succesfully`);
    } catch (err) {
        logger.error(err);
        res.status(err.status || 500).json({error:{status:err.status || 500,message:err.message || "server internal error while creating new user"}})
    }

    res.status(201).json({success:{status:201,message:"user created successfully"}})
}

module.exports = createUser