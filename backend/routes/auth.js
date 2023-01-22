const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//register
router.post("/register", async (req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    });

    //saves the response to the db
   try{
    const user = await newUser.save(); 
    res.status(201).json(user);
   }catch(err){
        res.status(500).json(err);
   }
});


//login
router.post("/login", async(req, res) =>{
    try{
        const user = await User.findOne({ email: req.body.email});
        if(!user){
            res.status(400).json("Invalid password or email");
            return;
        }

        const bytes  = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

       if (originalPassword !== req.body.password ){
        res.status(400).json("Invalid password or email");
        return;
       }

       const acessToken = jwt.sign({id:user._id, isAdmin: user.isAdmin},
        process.env.SECRET_KEY, 
        {expiresIn:"5d"}
        );

        const {password, ...info} = user._doc;
        res.status(200).json({...info, acessToken});

    }catch (err){
        res.status(501).json(err);
    }
});


module.exports = router;