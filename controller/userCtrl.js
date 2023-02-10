const User =require("../models/userModel");

const createUser =asycn(req,res)=>{
    const email=req.body.email;
    const findUser =await User.create(req.body);

    if (!findUser)
    {
        const newUser=User.create(req.body);
        res.json(newUser);
    }
 
else{
    res.jason({
        msg:"USer Already Exists",success:false,
    });

 }
}