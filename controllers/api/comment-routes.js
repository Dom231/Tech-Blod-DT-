const router = require('express').Router();
const {Comment} = require('../../models');


router.get('/', async (req,res)=>{
    try {
        // Search the database for a dish with an id that matches params
        const commentData = await Comment.findAll();
        console.log(commentData)
        // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
        const comment = commentData.map((project) => project.get({ plain: true }))
           
        console.log(comment);
        // Then, the 'dish' template is rendered and dish is passed into the template.
        res.render('comment', {comment});
        } catch (err) {
            res.status(500).json(err);
        }
 })

 router.get('/:id', async (req,res)=>{
    try {
        // Search the database for a dish with an id that matches params
        const commentData = await Comment.findByPk(req.params.id);
        console.log(commentData)
        // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
        const comment = commentData.get({ plain: true });
        console.log(comment);
        // Then, the 'dish' template is rendered and dish is passed into the template.
        res.status(200).json(comment);
        } catch (err) {
            res.status(500).json(err);
        }
 })



router.post('/', async (req,res)=>{
    try {
        const commentData = await Comment.create({
            comment: req.body.comment,
            post_id:req.body.post_id,
            
        });
        res.status(200).json(commentData);
      } catch (err) {
        res.status(400).json(err);
      }
 })

 module.exports = router;