const express=require("express");
const app=express();
const {connection}=require("./configs/db")
const cors=require("cors")
const {userRouter}=require("./Routes/Users.routes")
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send({"message":"Welcome to backend"})
})
app.use("/users",userRouter);
app.listen(4000,async (req,res)=>{
    console.log("Connecting to DB")
    try{
        await connection;
        console.log("Connected to db");
    }catch(err){
        console.log("Failed to connect with db")
        console.log(err)
    }
    console.log("Server is running on 4000")
})