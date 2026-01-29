import UserModel from  "../Model/usersModel.js";


export const createUserController = async (req,res) => {

    try {
        const {name,email,password}=req.body;
        const response = await UserModel.createUserModel({name,email,password});
        res.status(201).json({
            Message: "user has been created",
            userId: response
        });
}
catch (err){
     res.status(500).json({error : err.message });
    }
}