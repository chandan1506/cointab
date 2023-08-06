//creating userRouter
const express = require("express")
const userRouter = express.Router()

//importing controller logics
const { getUserData, getAllUsers, deleteAllUsers } = require("../controller/user.controller")


//fetch and add users data in to database
userRouter.get("/fetch-users",getUserData)

// Retrieve all usersData from the database
userRouter.get("/get-all-users",getAllUsers)

// Delete all users from the database
userRouter.delete("/delete-all-users",deleteAllUsers)




//exporting userRouter
module.exports = userRouter;