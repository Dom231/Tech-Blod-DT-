const router = require('express').Router();
const {Post} = require('../../models');

 router.get('/:id', async (req,res)=>{
    try {
        // Search the database for a dish with an id that matches params
        const postData = await Post.findByPk(req.params.id);
        console.log(postData)
        // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
        const post = postData.get({ plain: true });
        console.log(post);
        // Then, the 'dish' template is rendered and dish is passed into the template.
        res.render('singlepost', post);
        } catch (err) {
            res.status(500).json(err);
        }
 })

 router.get('/', async (req,res)=>{
    try {
        // Search the database for a dish with an id that matches params
        const postData = await Post.findAll();
        console.log(postData)
        // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
        const post = postData.get({ plain: true });
        console.log(post);
        // Then, the 'dish' template is rendered and dish is passed into the template.
        res.render('homepage', post);
        } catch (err) {
            res.status(500).json(err);
        }
 })

 router.post('/', async (req,res)=>{
    try {
        const TData = await Category.create(req.body);
        res.status(200).json(TData);
      } catch (err) {
        res.status(400).json(err);
      }
 })


 module.exports = router;