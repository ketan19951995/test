//this  is test2 branch 
// this is master

const router = require('express').Router();
const verify = require('./verifyToken');
router.get('/',verify,  (req,res)=>{
    res.json({
        posts:{
            title:'my first post',
            description : 'random data you should not access'
        }
    });
});

module.exports = router;


// end of test2 branch
