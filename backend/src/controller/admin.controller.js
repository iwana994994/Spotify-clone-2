import  Song  from "../model/song.model.js";
import  Album  from "../model/album.model.js";
import cloudinary from "../lib/cloudinary.js";

const uploadToCloudinary = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      resource_type: "auto",
    });
    return result.secure_url;
  } catch (error) {
    console.log("Error in uploadToCloudinary", error);
    throw new Error("Error uploading to cloudinary");
  }
};

export const createSong = async(req,res,next)=>{
   //from HTML FORM DATA
   if(!req.files|| !req.files.imageFile || !req.files.audioFile){

   return res.status(400).json({
    message:"Bad Request"
   })}

   const {title}=req.body
   const imageFile=req.files.imageFile
   const audioFile=req.files.audioFile
 const imageUrl= await uploadToCloudinary(imageFile)
 const audioUrl= await uploadToCloudinary(audioFile)

const song = new Song ({
    title,
    imageUrl,
    audioUrl
 })
 await song.save()
 res.status(201).json(song)

    
}
export const createAlbum = async(req,res,next)=>{
try {
    const{title}=req.body
    const imageFile=req.files.imageFile
    const imageUrl= await uploadToCloudinary(imageFile)
  const album= new Album({
     title,
    imageUrl
  }
   
    
  )
  await album.save()
  res.status(201).json(album)
  console.log("title:", title);
console.log("imageUrl:", imageUrl);
  
} catch (error) {
    console.log("Error in createAlbum", error);
    next(error);
  
}



}
export const deleteSong = async(req,res,next)=>{}
export const deleteAlbum = async(req,res,next)=>{}
export const getAllAlbums = async(req,res,next)=>{}
export const getAllSongs = async(req,res,next)=>{}
export const getStats = async(req,res,next)=>{}