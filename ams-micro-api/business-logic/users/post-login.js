const User = require('../../persistent-models/users');
const logger = require("../../shared/logger/winston-logger");

const login = async(req, res) => {
     // find email and password from database
       const user =  User.findOne({email: req.body.email, password: req.body.password},function(err, userdata){
           if(err){
             return  res.status(401).json({error:{status: 401, message: "Something went wrong!"}});
           } if(!userdata){
            return  res.status(501).json({error:{status:501, message:"Invalid Email or password."}});
          }
          //logger.debug(`User ${.email} login succesfully`);
          return res.json(userdata);          
       });
 }
 module.exports = login;