export const getAllStats=async(req,res,next)=>{
    try {
        cont [totalSongs,totalAlbums]=await Promise.all([Song.countDocuments(),Album.countDocuments()])
        res.json({totalAlbums,totalSongs})
        
    } catch (error) {
        console.log(error);
        
    }
}