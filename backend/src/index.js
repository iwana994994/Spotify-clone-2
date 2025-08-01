import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import { createServer } from "http";
import { initializeSocket } from "./lib/socket.js";
import { clerkMiddleware } from '@clerk/express';



import authRouter from "./route/auth.route.js";
import userRouter from "./route/user.route.js";
import adminRouter from "./route/admin.route.js";
import songRouter from "./route/song.route.js";
import albumRouter from "./route/album.route.js";
import statsRouter from "./route/stats.route.js";
import { connectDB } from "./lib/db.js";



const dirname=path.resolve();
dotenv.config();
const PORT= process.env.PORT ;
const app= express();
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.use(express.json())

//Make server and socket function

const httpServer=createServer(app);
initializeSocket(httpServer);

//

app.use((req, res, next) => {
  console.log("Authorization header:", req.headers.authorization)
  next()
})

app.use(clerkMiddleware({ tokenKey: "authorization" }));


app.use("/api/auth",authRouter)
app.use("/api/users",userRouter)
app.use("/api/admin",adminRouter)
app.use("/api/songs",songRouter)
app.use("/api/albums",albumRouter)
app.use("/api/stats",statsRouter)


if( process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend","dist", "index.html"));
  });
}


httpServer.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
    connectDB();
});

