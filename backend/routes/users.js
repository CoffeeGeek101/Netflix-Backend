const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");

//UPDATE
router.put("/:id", verify, async(req,res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt
                (req.body.password, process.env.SECRET_KEY).toString();
        }

    try{
        const userUpdate = await User.findByIdAndUpdate(req.params.id,{
            $set: req.body,
        },{
            new:true
        });
        res.status(200).json(userUpdate);
    }catch(err){
        res.status(500).json(err);
    }
    }else{
        res.status(403).json("You can not update others");
    }
});

//GET

router.get("/find/:id", async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const {password,...info} = user._doc;
        res.status(200).json({info});
    }catch(err){
        res.status(501).json(err);
    }
});

//GET ALL
router.get("/", verify, async(req,res)=>{
    const query = req.query.new;
    if(req.user.isAdmin){
        try{
            const user = query ? await User.find().sort({_id:-1}).limit(3) : await User.find();
            res.status(200).json(user);
        }catch(err){
            res.status(404).json(err);
        }
    }else{
        res.status(401).json("you are not allowed");
    }
});

//DELETE
router.delete("/:id", verify, async(req,res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        try{
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Sucessfully deleted");
            return;
        }catch(err){
            res.status(401).json(err);
        }
    }else{
        res.status(401).json("you can not delete it")
    }
});

//USER STATS
router.get("/stats", verify , async(req,res)=>{
    if(req.user.isAdmin){
        const today = new Date();
        const lastYear = today.setFullYear(today.setFullYear()-1);
        try{
            const data = await User.aggregate([
                {
                    $project: {
                        month: { $month: $createdAt},
                    },
                },
                {
                    $group :{
                        _id : "$month",
                        total : {$sum: 1},
                    },
                },
            ]);
            res.status(200).json(data);
        }catch(err){
            res.status(401).json(err);
        }
    }else{
        res.status(403).json("You are not allowed");
    }
});

module.exports = router;