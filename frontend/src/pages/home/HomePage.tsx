import { useEffect } from "react"
import TopBar from "./components/TopBar.tsx"
import { useChatStore } from "@/stores/useChat.tsx"
import { Avatar, AvatarImage } from "@/components/ui/avatar.tsx"
import { AvatarFallback } from "@/components/ui/avatar.tsx"
import { useUser } from "@clerk/clerk-react"


const HomePage = () => {

   const { users, onlineUsers } = useChatStore()
   const {user}=useUser()

  
  const{fetchUsers}=useChatStore()


  useEffect(() => {
     console.log("Pozivam fetchUsers");
   if(user) fetchUsers()
    console.log("Pozivam fetchUsers",fetchUsers);
      
  },[user,fetchUsers])
  return (
    <>
   <TopBar/>
   {users?.map((user) => {

  const isOnline = onlineUsers.has(user._id);
  return (
    <div key={user._id} className="flex items-center gap-2 hover:bg-zinc-700 rounded-lg p-2 relative">
      <Avatar>
        <AvatarImage src={user.imageUrl} />
        <AvatarFallback className="bg-zinc-500">{user.fullName}</AvatarFallback>
      </Avatar>
      <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${isOnline ? "bg-green-500" : "bg-zinc-500"}`} />
      <span>{user.fullName}</span>
    </div>
  );
})
   }
   
   </>
  )
}

export default HomePage