import  User  from "../model/user.model.js";
import Message from "../model/message.model.js";
export const getAllUsers=async(req,res,next)=>{

    try {
         const users=await User.find({clerkId:{$ne:req.auth.userId}})
          console.log("!!!!!!req.auth:", req.auth) 
    res.json(users)
    console.log("sending users",users);
    } catch (error) {
         console.error("🔥 Fetch users failed:", err)
        next(error)        
    }
   
}
export const getMessages=async(req,res,next)=>{
    try {

        const myId=req.auth.userId
        const userId=req.params
        const message=await Message.find
        ({$or:[{senderId:req.params.userId,receiverId:req.auth.userId},
            {senderId:req.auth.userId,receiverId:req.params.userId}]})
        res.json(message)
        
    } catch (error) {
        next(error)
        
    }

}