const userModel = require('../model/userModel');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
//get All the users
const getAllUsers=async(req,res)=>{
    try {
        
        const users=await userModel.find(); //fetch all the records from Database
        res.status(200).json({
            message:'User Data Fetched Successfully!',
            data:users
        });
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

// add user to the database
const addUsers = async (req, res) => {
    try {
        const{name ,email ,mobile , password} = req.body;   
        const userExists = await userModel.findOne({email});
        if(userExists){
            return res.status(400).json({
                message: 'User Already Exists!'
            });
        }   
        const hashPass = await bcrypt.hash(password , 10);
        const user = new userModel({name ,email ,mobile , password :hashPass } );
        await user.save();
        res.status(201).json({
            message: 'User Added Successfully!',
            data: user
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

//get the user by id

const getUserById =async(req,res)=>{
    try{
    //     const token = req.cookies.authToken;
    //     if(!token){
    //        return res.status(401).json({ message: "Unauthorized - No Token" });

    //     }
    //     // Verify Token
    //     const decoded = jwt.verify(token,process.env.SECRET_KEY);
    //     const user = await userModel.findById(decoded.id).select("-password");

        res.status(200).json(req.user);
    }
    catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};

//handle the login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: 'Invalid Email or Password!'
            });
        }

        let isMatch = await bcrypt.compare(password , user.password);

       if(!isMatch){
           return res.status(400).json({
               message:'Invalid Email or Password!'
           });
        }
        const token = jwt.sign({userId:user._id},process.env.SECRET_KEY ,{ expiresIn: "1d" });
            
            res.cookie("authToken", token, {
            httpOnly: true, 
            secure:false,
            sameSite: "lax", 
            maxAge: 24 * 60 * 60 * 1000, // 1 day
        });
        res.status(200).json({
            message: 'Login Successful!',
            
          
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
const logoutUser = (req, res) => {
    res.clearCookie("authToken", { httpOnly: true, secure: true, sameSite: "strict" });
    res.status(200).json({ message: "Logout successful!" });
};

module.exports = {addUsers,getAllUsers ,getUserById,loginUser ,logoutUser }; //export the functions to use them in routes