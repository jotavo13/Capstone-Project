// Dependencies
const express = require('express');
const morgan = require('morgan'); 
const methodOverride = require('method-override');
const app = express();
const mongoose = require('mongoose');
const { DATABASE_URL, PORT } = require('./config');
const basicRoutes = require('./controller/basic')
const router = express.Router();
const cors = require('cors');
const User = require('./models/User');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const bcrypt = require('bcryptjs');






/////////////////////////////////////////////////////
// Middleware  req => middleware => res
/////////////////////////////////////////////////////
app.use(morgan("tiny")) //logging// 
app.use(methodOverride("_method")) // override for put and delete requests from forms
app.use(express.urlencoded({extended: false})) // parse urlencoded request bodies
app.use(express.static("public")) // serve files from public statically
app.set('view engine', 'ejs');
app.use('/basic', basicRoutes );

// Controller



app.get('/', (req, res) => {
    res.send('default route');
})






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





// Listener

//------------------------------------------
mongoose.connect(DATABASE_URL).then(() => {
    app.listen(PORT, () => {
      console.log(`Your app is listening on port ${PORT}`);
    });
  });
  
  //now we have mongoose calling the app.listen to boot up the server, but ALSO he is connecting us to the DATABASE