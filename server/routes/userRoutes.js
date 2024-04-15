
module.exports = app => {
    const users = require("../controllers/userController.js");  
    var router = require("express").Router();
    // Create a new User
    router.post("/", users.create);
    // Retrieve all users
    router.get("/", users.findAll);
    app.use('/users', router);
  };