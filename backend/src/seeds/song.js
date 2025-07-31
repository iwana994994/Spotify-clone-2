import mongoose from "mongoose"
import dotenv from "dotenv"
import Song from "../model/song.model.js"
dotenv.config()

const songs = [
    {
        title:"first song",
        imageUrl:"/frontend/public/cover-images/1.jpg",
        audioUrl:"/frontend/public/audio/1.mp3",
     
    },
    {
        title:"second song", 
        imageUrl:"/frontend/public/cover-images/2.jpg",
        audioUrl:"/frontend/public/audio/2.mp3",
     
    }
]

export const seedSongs=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
  
    await Song.insertMany(songs)
    console.log("Songs Seeded")
        
    } catch (error) {
        console.log(error)
        
    }
    
}
seedSongs()