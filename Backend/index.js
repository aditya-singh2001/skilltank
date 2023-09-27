const express=require("express");
const app=express();
const {connectDB}=require("./configs/db")
const cors=require("cors")
const {userRouter}=require("./Routes/Users.routes")
const {mentorRouter} =require("./Routes/Mentors.route")
const {isLoginCheck}=require("./middleware/isLogin.middleware")
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send({"message":"Welcome to backend"})
})
app.use("/users",userRouter);
app.use(isLoginCheck);
app.use("/mentor",mentorRouter)
connectDB().then(()=>{
    app.listen(4000,async (req,res)=>{
        // console.log("Connecting to DB")
     console.log("Server is running on 4000")
    })
})
