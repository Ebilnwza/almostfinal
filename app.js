const express= require('express')
const session = require('express-session')
const bodyParser =require('body-parser')
const connectDB = require('./config/db/db')
const loginPage = require('./Routers/loginPage');
const registerPage = require('./Routers/registerPage');
const homePage = require('./Routers/homePage');
const logout = require('./Routers/killsession');
const createPosts = require('./Routers/createposts');
const post = require('./Routers/post');
const path = require('path')
const bcrypt = require('bcrypt');
const app = express();
const PORT= 3000;
global.loggin = null;
try{
connectDB();
app.use(session({
    secret: 'secret',
}))
app.use('*',(req,res,next)=>{
    loggin = req.session.user_id
    next();
})
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine','ejs')
app.use('/killsession',logout);
app.use('/loginPage',loginPage);
app.use('/registerPage',registerPage);
app.use('/',homePage)
app.use('/createposts',createPosts)
app.use('/post',post)
// app.get('/session',(req,res)=>{
//     const session = req.session.useremail
//     res.send(session+'awdwa')
// })
app.listen(PORT,()=>{
    console.log(`App Server is running at port ${PORT} `)
})
}catch (error)  {
    console.error('An error occurred:', error);
  };