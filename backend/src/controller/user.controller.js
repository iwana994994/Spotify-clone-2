import  User  from "../model/user.model.js";
import Message from "../model/message.model.js";
export const getAllUsers = async (req, res, next) => {
    console.log("🚀 Ušao u getAllUsers");
  try {
    console.log("🚀 Pozvana getAllUsers funkcija!");
    console.log("📌 req.auth:", req.auth);

    const filter = req.auth?.userId ? { clerkId: { $ne: req.auth.userId } } : {};
    console.log("🔍 Filter koji koristimo:", filter);

    const users = await User.find(filter).select("fullName email clerkId");
    console.log("🎯 Users iz baze:", users);

    res.status(200).json(users);
  } catch (error) {
    console.error("❌ Greska u getAllUsers:", error);
    res.status(500).json({ message: "Greška u serveru" });
  }
};
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