// Dependencies
const express = require('express');

const app = express();
const router = express.Router();
// const cors = require('cors');
const User = require('./models/User');
const session = require('express-session');
// const MongoStore = require('connect-mongo');
const bcrypt = require('bcryptjs');



//------------Auth Routes
app.get("/auth/signup", (req, res)=>{
    res.send("hello signup page")
   });
  
   app.post("/auth/signup", async (req, res)=>{
    console.log(req.body)
    // create and send to mongo
    res.json(await User.create(req.body))
   })
  
   app.get("/auth/login", (req, res)=>{
    res.send("hello login page")
   });
  
   app.post("/auth/login", async (req, res)=>{
    console.log("req.body.username:", req.body.username)
    const user = await User.findOne({username: req.body.username})
    console.log(user);
    if (user){
      const result = await bcrypt.compare(req.body.password, user.password);
      console.log("result", result);
        if (result){
          req.session.currentUser = {
            username: user.username,
            id: user._id
          }
          console.log("password matched");
          res.json(req.session.currentUser)
        }
        else{
          console.log("invalid")
          // res.json("Invalid credentials")
        }
    }
    else{
      console.log("user does not exist")
      res.json(null)
    }
  
   })
  
  
  
  //------------Auth Routes
   app.get("/auth/signup", (req, res)=>{
    res.send("hello signup page")
   });
  
   app.post("/auth/signup", async (req, res)=>{
    console.log(req.body)
    // create and send to mongo
    res.json(await User.create(req.body))
   });
  

   
module.exports = router;
  
  