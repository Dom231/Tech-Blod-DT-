const router = require('express').Router();
const {User} = require('../../models');

 router.get('/:id', async (req,res)=>{
    try {
        // Search the database for a dish with an id that matches params
        const userData = await User.findByPk(req.params.id);
        console.log(userData)
        // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
        const user = userData.get({ plain: true });
        console.log(user);
        // Then, the 'dish' template is rendered and dish is passed into the template.
        res.render('dashboard', user);
        } catch (err) {
            res.status(500).json(err);
        }
 })

 module.exports = router;