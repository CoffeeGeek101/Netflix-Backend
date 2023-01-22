const router = require("express").Router();
const List = require("../models/List");
const verify = require("../verifyToken");

//CREATE
router.post("/", verify, async(req,res)=>{
    if(req.user.isAdmin){
        const list = new List(req.body);
        try{
            const newList = await list.save();
            res.status(200).json(newList);
        }catch(err){
            res.status(403).json(err);
        }
    }else{
        res.status(400).json("you can't create");
    }
});

//DELETE
router.delete("/:id", verify, async(req, res)=>{
    if(req.user.isAdmin){
        try{
            await List.findByIdAndDelete(req.params.id);
            res.status(201).json("Deleted sucessfully");
        }catch(err){    
            res.status(402).json(err);
        }
    }else{
        res.status(403).json("you can't delete a list");
    }
});

//GET
router.get("/", verify, async(req,res)=>{
    const typeQuery = req.query.type;
    const typeGenre = req.query.genre;
    let list=[];
    try{
        if(typeQuery){
            if(typeGenre){
                list = await List.aggregate([{$sample :{size:10}},
               {$match:{type: typeQuery, genre:typeGenre}},]);
            }else{
                list = await List.aggregate([{$sample:{size:10}},
                {$match : {type: typeQuery}},]);
            }
        }else{
            list = await List.aggregate([{$sample:{size:10}}]);
        }
        res.status(200).json(list);
    }catch(err){
        res.status(400).json(err);
    }
});

module.exports = router;