import User from "../model/user.model.js";
export const authCallback=async(req,res,next)=>{
try {
    const {id,firstName,lastName,imageUrl}=req.body
    console.log(req.body)
    const user= await User.findOne({clerkId:id})
    console.log(user);
    

    if(user){
        res.json(user)
    }else{
        const newUser=new User({
            clerkId:id,
            fullName:`${firstName} ${lastName}`,
            imageUrl
        })

        await newUser.save()
        res.json(newUser)
        console.log("success with user data");
    }

} catch (error) {
    next(error)
    
}


}