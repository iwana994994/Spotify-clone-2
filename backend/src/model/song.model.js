import mongoose from "mongoose";


const songSchema = new mongoose.Schema({
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    audioUrl: { type: String, required: true },
    albumId: { type: mongoose.Schema.Types.ObjectId, ref: "Album"},
  
   
   
}, { timestamps: true });

const Song = mongoose.model("Song", songSchema);
export default Song