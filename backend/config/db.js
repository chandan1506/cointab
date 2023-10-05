//dotenv
require('dotenv').config()
//importing sequelize
const Sequelize = require("sequelize")


//to provide credentials like database name,userid,userpassword to create connection
const sequelize =  new Sequelize("cointab","root",process.env.password,{host:"localhost",dialect:"mysql"})

//verifying connection is successfull or not
// sequelize.authenticate()
// .then(()=>console.log("connection is successfull"))
// .catch((error)=>console.log(error.message))


//exporting connection
module.exports = sequelize;