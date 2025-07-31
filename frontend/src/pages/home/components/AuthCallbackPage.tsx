import axiosInstance from "@/lib/axios"
import { useUser } from "@clerk/clerk-react"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const AuthCallbackPage = () => {
    const { user}=useUser()
    const navigate = useNavigate()
useEffect(() => {
   
      if (!user) return
try {
    
 axiosInstance.post("/auth/callback",{
        id:user.id,
        firstName:user.firstName,
        lastName:user.lastName,
        imageUrl:user.imageUrl

    })
    console.log("I send user" ,user)
} catch (error) {
    console.log(error)
    console.log("problem with sending user")
}
finally {
    navigate("/")
}

}, [user, navigate])


  return (
    
    <div> Login in </div>
  )
}

export default AuthCallbackPage