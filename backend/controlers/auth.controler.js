import bcrypt from 'bcryptjs';
import User from "../models/user.model.js"
import generateTokenAndSetCookie from "../utils/generateToken.js"
export const signup = async(req, res) => {
    try {
        const {fullName , userName, password, confirmPassword, gender} = req.body;
        if(password !== confirmPassword){
            return res.status(403).json({errors:"Password is not matching"})
        }
        const user =  await User.findOne({userName});
        if(user){
            return res.status(400).json({errors:"User already exists"})
        }
        // Hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt)

        //https://avatar.iran.liara.run/public/boy
        //https://avatar.iran.liara.run/public/girl
        const bodProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`
        const newUser = new User({
            fullName ,
            userName,
            password:hashedPassword,
            gender,
            profilePic : gender === 'male' ? bodProfilePic : girlProfilePic
        })

        if(newUser){
            // generate jwt token
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save();
        res.status(201).json({
            _id : newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
            profilePic: newUser.profilePic
        })
        console.log("Signup user")
        }
        else{
            res.status(400).json({error:"Invalid usr detailes"})
        }
    } catch (error) {
        console.log("Error occured in signUp",error.message)
        res.status(500).json({error:"Internal server error"})
    }
    
}
export const login = async (req, res) => {
    try {
        const{userName, password} = req.body;
        const user = await User.findOne({userName});
        const isPasswordCorrect = await bcrypt.compare(password, user.password || "");

        if(!user|| !isPasswordCorrect){
            return res.status(400).json({error:"Invalid Credentials"});
        }
        generateTokenAndSetCookie(user._id, res);
        res.status(201).json({
            _id : user._id,
            fullName: user.fullName,
            userName: user.userName,
            profilePic: user.profilePic
        })
        console.log("Loing user")
    } catch (error) {
        console.log("Error occured in signin",error.message)
        res.status(500).json({error:"Internal server error"})
    }
}
export const logout = (req, res) => {
    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message:"Logged out successfully"})
        console.log("logout user")
    } catch (error) {
        console.log("Error occured in Logout",error.message)
        res.status(500).json({error:"Internal server error"})
    }
}