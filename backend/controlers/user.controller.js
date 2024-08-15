import express from 'express';
import User from '../models/user.model.js';

export const getUsersForSidebar = async(req, res)=>{
    try {
        const logedInUserId =  req.user._id;
        const filterUsers =  await User.find({_id: {$ne: logedInUserId}}).select("-password")
        res.status(200).json(filterUsers)
    } catch (error) {
        console.log("Error in getUsersForSidebar : ",  error.message);
        res.status(500).json({error:"Internal server error"});
    }
}