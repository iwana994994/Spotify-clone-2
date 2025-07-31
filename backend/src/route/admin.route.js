import { Router } from "express";
import { createAlbum, createSong, deleteAlbum, deleteSong, getAllAlbums, getAllSongs, getStats } from "../controller/admin.controller.js";

const route= Router();

route.post("/createSong",createSong)
route.post("/deleteSong",deleteSong)
route.post("/createAlbum",createAlbum)
route.post("/deleteAlbum",deleteAlbum)
route.get("/songs",getAllSongs)
route.get("/albums",getAllAlbums)
route.get("/getStats",getStats)

export default route