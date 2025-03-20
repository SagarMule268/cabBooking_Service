const userModel = require('../model/userModel');
   

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
        const user = new userModel({name ,email ,mobile , password});
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
        const {id} =req.params;
        const user =await userModel.findById(id);
        res.status(200).json({
            message:'User fetched successfully',
            data:user
        });
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

       if(user.password !== password){
           return res.status(400).json({
               message:'Invalid Email or Password!'
           });
        }

        res.status(200).json({
            message: 'Login Successful!',
            data: user
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


module.exports = {addUsers,getAllUsers ,getUserById,loginUser}; //export the functions to use them in routes