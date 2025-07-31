import Song from "../model/song.model.js";
export const getAllSongs=async(req,res,next)=>{


    try {
        const songs= await Song.find()
        res.json(songs)
    } catch (error) {
        console.log(error)
        
    }
}