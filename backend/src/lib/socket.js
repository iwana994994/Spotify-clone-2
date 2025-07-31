import { Server } from "socket.io";


export const initializeSocket= (httpServer) =>{
const io= new Server(httpServer,{cors:{origin:"http://localhost:3000",credentials:true}} );

const userSockets= new Map();

//Server is listening
io.on("connection",(socket)=>{

    socket.on("user_connected",(userId)=>{
          console.log('Backend received user_connected event,!!!! userId:', userId);
        userSockets.set(userId,socket.id);
        

io.emit("user_connected",userId);   
console.log("Online korisnici stigli:", userSockets); // 
socket.emit("users_online",Array.from(userSockets.keys()));

 }) 



    socket.on ("disconnect",()=>{
        let disconnectedUserId;

        for(const [userId,socketId] of userSockets.entries()){
            if(socketId===socket.id){
                disconnectedUserId=userId;
                userSockets.delete(userId);
                
                break;
            }
        }
        if(disconnectedUserId){
            
            io.emit("user_disconnected",disconnectedUserId);
          
        }

    })

});





}