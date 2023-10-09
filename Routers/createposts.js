const  express  = require('express');
const router = express.Router();
const usermodel = require('../config/models/usermodel');
const postsmodel = require('../config/models/postsmodel');
router.get('/', async(req,res)=>{
if(req.session.userloggin){
  const user_name = req.session.user_username
  res.render('createposts',{user_name})
}
else{
  res.redirect('/')
}
})
router.post('/', async (req, res) => {
  const id = req.params.id;
    const {title, content } = req.body;
    const user = await usermodel.findById(req.session.user_id);
    const author = user.username;
    try {
      const newpostsmodel = await new postsmodel({
        author,
        title,
        content,
      });
      const savedPost = await newpostsmodel.save();
       res.redirect(`/`);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });




module.exports =router;