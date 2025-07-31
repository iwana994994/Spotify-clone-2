import { useChatStore } from "@/stores/useChat"
import { useUser } from "@clerk/clerk-react"
import {  useEffect } from "react"
import TopBar from "../home/components/TopBar.tsx"
import UserList from "./components/UserList.tsx"


const ChatPage = () => {
  const {user}=useUser()
  const{fetchUsers}=useChatStore()


  useEffect(() => {
     console.log("Pozivam fetchUsers");
    if(user) fetchUsers()
      
  },[user,fetchUsers])
  return (
    <>
    <TopBar/>
    <span>Chat</span>
    <UserList/>
    </>
  )
}

export default ChatPage
