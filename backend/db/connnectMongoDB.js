import mongoose from "mongoose";

const connectMongDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB,)
        console.log("Conneted to MongoDB")
    } catch (error) {
        console.log("Error from Db connection" , error)
    }
}

export default connectMongDB;