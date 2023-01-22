const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
    {
        title : {type : String, require:true , unique: true},
        trailer: {type:String},
        coverImg : {type: String},
        preference : {type: String},
        ageLimit : {type: Number},
        duration : {type:String},
        quality : {type: String},
        video : {type: String},
        year :  {type: String},
        tagOne : {type: String},
        tagTwo : {type: String},
        tagThree : {type: String},
        heroImg:{type:String},
        logoImg:{type:String},
        description:{type: String},
        genre:  {type: String},
        isSeries:  {type: Boolean, default:false},
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Movie", MovieSchema);