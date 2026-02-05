import { hashpassword,passwordCheck } from "../utils/hash";
import { createToken } from "../utils/token";

import AuthUserModel from `../Model/authUserModel.js`


export const authSignUp =async (req, res) => {
    try{
        const{name,email,password,role} = req.body
        const checkEmail=await AuthUserModel.userLoginModel(email)
        if(chechEmail){
            return res.status(400).json({ message: "email already exist"})

        }
        const newpassword = await hashpassword(password);

        const id = await AuthUserModel.userSignupModel (
            {
            name: name,
            email: email,
            password: newpassword,
            role: role || "user"
            })
    res.status(201).json({
        message: "user has been created",
        userId: Id
    })

    }catch(err){
        res.status(500).json({ error: err.message})
    }
}
export const authLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await AuthUserModel.userLoginModel(email);

        if(!user){
            return res.status(400).json({ message: "invalid credentials"})
        }
        const userPassword = await (password,user.password)


    }catch (err){
        res.status(500).json({ error: err.mess})
       
    }
}