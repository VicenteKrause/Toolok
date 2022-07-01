const express = require("express");
const { db } = require("../models/user");
const userSchema = require("../models/user");
const bcrypt = require("bcrypt");
const user = require("../models/user");
const saltRounds = 10;

const router = express.Router();

// creaat user
router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  console.log(user.password);
  bcrypt.hash(user.password, saltRounds, (err, hashedPassword) => {
    if (err) {
      next(err);
    } else {
      user.password = hashedPassword;
      console.log(user.password);
      user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
    }
  });
});

//get all users
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//get a user

router.post("/registrar", (req, res) => {
  const userS = req.body;
  const name = userS.name;
  const password = userS.password;

  userSchema.findOne({ name }, (err, user) => {
    if (err) {
      res.status(500).send("Error al autenticar");
      console.log("error1");
    } else if (!user) {
      res.status(500).send("Error ,Usuari no existe");
      console.log("error2");
    } else {      
      user.isCorrectPassword(password , (err , result)=>{
        if (err) {
            res.status(500).send("Error al autenticar");
            console.log("error3");
        }else if(result){
            console.log("tai redy");            
            
        }else{
            console.log("quien eres");
        }
        
      });
    }
  });
});

//update user
router.put("/users", (req, res) => {});

module.exports = router;
