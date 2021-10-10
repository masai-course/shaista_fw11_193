const express = require("express");

const router = express.Router();
const { body,validationResult  } = require('express-validator');
const Topic = require("../models/user.model");
 
router.post("/",
     body('first_name', 'First Name is required').not().isEmpty(),     
     body('last_name', 'last Name is required').not().isEmpty(),
     body('email', 'Correct mail is required').isEmail(),
     body('pincode', 'pincode is required with 6 digits').not().isEmpty().isLength({ min: 6 }).isLength({ max:6}).matches(/\d/),
     body('age').custom((value, { req }) => {
    if (value>1 && value<100) {
        return true;
      
    }
    throw new Error('Age must be between 1 and');
    // Indicates the success of this synchronous custom validator
    
  }),
     body('gender','Give valide data').isIn(['Female', 'Male', 'Others']),



    // Indicates the success of this synchronous custom validator
   

    async (req,res)=>{

        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    try{
        const topic=await Topic.create(req.body)
          return res.status(201).send({topic})
    } catch(err){
        return res.status(400).send(err.message)
    }
})




module.exports=router;