const express = require('express')
const router = express.Router();
const usermodel = require('../config/models/usermodel');
const postsmodel = require('../config/models/postsmodel');
router.get('/', async(req,res)=>{
    const posts = await postsmodel.find();
    const user_name = req.session.user_username
    res.render('homePage',{posts,user_name})
})
module.exports = router;