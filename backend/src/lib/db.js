import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn=await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Connected to MongoDB ${conn.connection.host}`);
         console.log("Connected to MongoDB", mongoose.connection.readyState); 
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};