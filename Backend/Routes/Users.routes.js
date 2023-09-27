const express=require("express");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const { UserModel } = require("../models/Users.Models");
const userRouter=express.Router();

userRouter.get("/",(req,res)=>{
    res.send({"message":"Welcome to user routes"})
})

userRouter.post("/register",async(req,res)=>{
    const {name,email,pass,type}=req.body;
    try{
        let findUser=await UserModel.find({email});
        if(findUser.length > 0){
            res.send({"message":"User already register. Please login"});
        }else{
            bcrypt.hash(pass, 5,async (err, hash)=> {
                if(err){
                    res.send({"message":"Somthing went wrong"});
                    console.log(err);
                }else{
                    let userData=new UserModel({name,email,pass:hash,type});
                    await userData.save();
                    res.send({"message":"Registration successful"})
                }
            });
        }

    }catch(err){
        res.send({"message":"Somthing went wrong"});
        console.log(err);
    }

})

userRouter.post("/login",async (req,res)=>{
    const {email,pass,type}=req.body;
    try{
        let findUser=await UserModel.find({email});
        if(findUser.length > 0){
            bcrypt.compare(pass, findUser[0].pass, function(err, result) {
                if(result){
                    if(type==findUser[0].type){
                        let token = jwt.sign({ id:findUser[0]._id }, 'aditya');
                        res.send({"message":"login successful",token,"name":findUser[0].name});
                    }else{
                        res.send({"message":`This is account is ${findUser[0].type}. Please login in ${findUser[0].type}.`})
                    }
                }else{
                    res.send({"message":"Incorrect password"});
                }
            });
            
        }else{
            res.send({"message":"No account found. Please Signup"});
        }
    }catch(err){
        res.send({"message":"Somthing went wrong"});
        console.log(err);
    }

})
module.exports={
    userRouter
}