const express = require("express");
const { UserModel } = require("../db");
const userRouter = express.Router();
const bcrypt = require("bcrypt")
const { JWT_USER_PASSWORD } = require("../config");
const jwt = require("jsonwebtoken")
const { z } = require("zod")


userRouter.post("/signup", async(req, res) => {
    console.log("BODY RECEIVED:", req.body);
    const requiredBody = z.object({
        username  :z.string().min(4).max(8),
        email : z.string().email(),
        password : z.string().min(8).max(32)
    })
    console.log(requiredBody);
    
    const parseddatawithsuccess = requiredBody.safeParse(req.body)

    if(!parseddatawithsuccess.success){
        res.json({
            message : "Invalid Format!",
            error : parseddatawithsuccess.error
        })
        return
    }

    const {username,email,password} = req.body;

    const hashedPassword = await bcrypt.hash(password,3);
   try{ const user  =  await UserModel.create({
        username,
        email,
        password : hashedPassword
    })
    res.json({ message: "signup working!" });}
    catch(e){
        res.json({
             message: "something fuckedup!",
             error : e.message 
            });
    }
});


    userRouter.post("/signin", async (req, res) => {
        const {username , password} = req.body
        const user =  await UserModel.findOne({
            username
        })
        if(!user){
            res.json({
                message : "User does not exist"
            })
            return
        }

        const passwordMatch = await bcrypt.compare(password,user.password)

        if(passwordMatch){
            const token = jwt.sign({
                username
            },JWT_USER_PASSWORD)
            console.log(token);

            
            res.json({
                token  : token,
                message : "You are signed in!"
            })
        }
        else{
            res.status(403 ).json({
                message : "Invalid Credntials or User does not exist!"
            })
    }
}); 

module.exports = {
    userRouter 
};
