const jwt = require('jsonwebtoken');
const isLoginCheck=(req,res,next)=>{
    let token=req.headers.authorization;
    if(token){
        jwt.verify(token, "aditya", function(err, decoded) {
            if(err){
                res.send({"message":"Something went wrong. Please login again"})
            }else{
                //console.log(decoded)
                let {email,id}=decoded;
                req.body.userId=id;
                next();
            }
          });
     }else{
        res.send({"message":"Please login"})
     }
}


module.exports={
    isLoginCheck
}