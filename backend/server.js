// Dependencies
const express = require('express');
const morgan = require('morgan'); 
const methodOverride = require('method-override');
const app = express();
const mongoose = require('mongoose');
const { DATABASE_URL, PORT } = require('./config');
const basicRoutes = require('./controller/basic')
const router = express.Router();
// const cors = require('cors');
const User = require('./models/User');
const session = require('express-session');
// const MongoStore = require('connect-mongo');
const bcrypt = require('bcryptjs');






/////////////////////////////////////////////////////
// Middleware  req => middleware => res
/////////////////////////////////////////////////////
app.use(morgan("tiny")) //logging// 
app.use(methodOverride("_method")) // override for put and delete requests from forms
app.use(express.urlencoded({extended: false})) // parse urlencoded request bodies
app.use(express.static("public")) // serve files from public statically
app.set('view engine', 'ejs');

// Controller
const basicController = require('./controller/basic');
app.use('/basic', basicController);

app.get('/', (req, res) => {
    res.send('default route');
})






// Listener

//------------------------------------------
mongoose.connect(DATABASE_URL).then(() => {
    app.listen(PORT, () => {
      console.log(`Your app is listening on port ${PORT}`);
    });
  });
  
  //now we have mongoose calling the app.listen to boot up the server, but ALSO he is connecting us to the DATABASE