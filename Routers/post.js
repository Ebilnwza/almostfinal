const express = require('express');
const router = express.Router();
const postsmodel = require('../config/models/postsmodel');
const comemntmodel = require('../config/models/commentmodel');
const usermodel = require('../config/models/usermodel');

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await postsmodel.findById(id);
    const comment = await comemntmodel.find({addresspost:id});
    res.render('post', { data,id,comment});
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).send('An error occurred while fetching the post.');
  }
});
router.post('/comment', async(req,res)=>{
  const content = req.body.content
  const addresspost = req.body.addresspost;
 const author = req.session.user_username;
  try {
    const newcomemntmodel = await new comemntmodel({
      addresspost,
      author,
      content,
    });
    const savedPost = await newcomemntmodel.save();
     res.redirect('/post/'+addresspost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})
module.exports = router;
