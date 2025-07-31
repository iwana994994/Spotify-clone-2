import type { User } from "@/types"
import { create } from "zustand"
import { io } from "socket.io-client"
import axiosInstance  from "@/lib/axios"
import { Socket } from "socket.io-client"


interface ChatStore{
    users:User[],
    socket:Socket,
    isConnected:boolean,
    onlineUsers:Set<string>,
    fetchUsers:()=>Promise <void>,
    initSocket:(userId:string)=>void,
    disconnectSocket:()=>void,
    isLoading:boolean,
    error:string|null
}
const baseURL = import.meta.env.MODE === "development" ? "http://localhost:5000" : "/"
const socket = io(baseURL, {
	autoConnect: false, // only connect if user is authenticated
	withCredentials: true,
});
export const useChatStore=create<ChatStore>((set,get)=>({
 
    users:[],
    socket,
    isConnected:false,
    onlineUsers:new Set<string>(),
    isLoading:false,
    error:null,


    
   
	fetchUsers: async () => {
        console.log("📡 fetchUsers called"); // 
		set({ isLoading: true, error: null });
		try {
            console.log("🌐 Pozivam backend za korisnike...");
			const response = await axiosInstance.get("/users");
          console.log("📦 response.data:", response.data);
			set({ users: response.data });
		} catch (error) {
			console.log("🔥 Fetch users failed:", error);
		} finally {
			set({ isLoading: false });
		}
	
    },
    initSocket: (userId) => {
     
        if(!get().isConnected){
            socket.auth = { userId };
             socket.connect();

             socket.emit("user_connected", userId);
         
             socket.on( "users_online",(users:string[])=>{set({onlineUsers:new Set(users)})
          
            })
            
        }
        socket.on("user_connected", (userId) => {
            set((state) => {
                const updatedOnlineUsers= new Set(state.onlineUsers);
                console.log('User connected event sa userId:', userId);
                updatedOnlineUsers.add(userId);
                return {onlineUsers:updatedOnlineUsers}
            });
        })
        socket.on("user_disconnected", (userId) => {
            set((state) => {
               
                const newOnlineUsers= new Set(state.onlineUsers);
                newOnlineUsers.delete(userId);
                return {onlineUsers:newOnlineUsers}
            });
        })
        socket.on('connect', () => console.log('Socket connected:', socket.id));
socket.on('connect_error', (err) => console.log('Socket connect error:', err));
socket.on('disconnect', () => console.log('Socket disconnected'));

        set({ isConnected: true });
    },
    disconnectSocket: () => {        
        if(get().isConnected){
            socket.disconnect();
        set({ isConnected: false });
        }
        
    },


}))