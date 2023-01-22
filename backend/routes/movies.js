const router = require("express").Router();
const Movies = require("../models/Movies");
const verify = require("../verifyToken");
const { route } = require("./auth");

//CREATE
router.post("/", verify, async(req,res)=>{
    if(req.user.isAdmin){
        const movie = new Movies(req.body);
        try{
            const saveMovie = await movie.save();
            res.status(200).json(saveMovie);
        }catch(err){
            res.status(404).json(err);
        }
    }else{
        res.status(403).json("you can not add movies");
    }
});

//UPDATE
router.put("/:id", verify, async(req, res)=>{
    if(req.user.isAdmin){
        try{
            const updateMovie = await Movies.findByIdAndUpdate(req.params.id,
                {$set: req.body},
                {new:true});
            res.status(200).json(updateMovie);    
        }catch(err){
            res.status(404).json(err);
        }
    }else{
        res.status(403).json("option not available");
    }
});

//GET
router.get("/find/:id", async(req,res)=>{
    try{
        const movie = await Movies.findById(req.params.id);
        res.status(200).json(movie);
    }catch(err){
        res.status(403).json("not found");
    }
});

// DELETE
router.delete("/:id", verify, async(req,res)=>{
    if(req.user.isAdmin){
        try{
            await Movies.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted sucessfully");
        }catch(err){
            res.status(404).json(err);
        }
    }else{
        res.status(403).json("You are not allowed");
    }
});

//DELETE ALL by 2002
router.delete('/', verify, async(req,res)=>{
    if(req.user.isAdmin){
        try{
            await Movies.deleteMany({year: 2002});
            res.status(200).json("Sucessfully Deleted everything from 2002");
        }catch(err){
            res.status(404).json(err);
        }
    }else{
        res.status(403).json("you are not allowed to delete")
    }
})

//GET RANDOM
router.get("/random", verify, async(req,res)=>{
    const type = req.query.type;
    let movie;
    try{
        if(type === "series"){
            movie = await Movies.aggregate([
               {$match : {isSeries : true}},
               {$sample : {size:1}},
            ]);
        }else{
            movie = await Movies.aggregate([
                {$match : {isSeries : false}},
                {$sample : {size:1}},
            ]);
        }
        res.status(200).json(movie);
    }catch(err){
        res.status(403).json(err);
    }
});

//GET ALL
router.get("/", verify, async(req,res)=>{
    if(req.user.isAdmin){
        const movie = await Movies.find();
        res.status(200).json(movie.reverse());
    }else{
        res.status(400).json("you are not allowed");
    }
});

module.exports = router;