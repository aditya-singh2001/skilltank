const mongoose=require("mongoose");
const mentorSchema=mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String,required:true}
})
const MentorModel=mongoose.model("mentor",mentorSchema);
module.exports={
    MentorModel
}