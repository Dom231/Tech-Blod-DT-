const router = require('express').Router();
const {Post} = require('../models'); 

router.get('/', async (req,res)=>{
    try {
        // Search the database for a dish with an id that matches params
        const postData = await Post.findAll();
        console.log(postData)
        // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
        const post = postData.map((gallery) => 
        gallery.get({ plain: true })
           );
        console.log(post);
        // Then, the 'dish' template is rendered and dish is passed into the template.
        res.render('homepage', {post});
        } catch (err) {
            res.status(500).json(err);
        }
    });

    module.exports = router;