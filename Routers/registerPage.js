const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');

const usermodel = require('../config/models/usermodel');
router.get('/',(req,res)=>{
    res.render('registerPage')
})
router.post('/', async (req, res) => {
    const {username,email,password} = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const new_usermodel = new usermodel({
        username,
        email,
        password:hashedPassword
      })
  
      const savedUser = await new_usermodel.save();
       res.redirect('/loginpage');
    } catch (error) {
      res.send('this account has in system')
    }
});

module.exports = router;