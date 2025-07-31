import {    Router } from "express";
import { getAllAlbums, getAlbumById } from "../controller/album.controller.js";

const route= Router();

route.get("/getAllAlbums",getAllAlbums)
route.get("/getAlbumById/:id",getAlbumById)
export default route