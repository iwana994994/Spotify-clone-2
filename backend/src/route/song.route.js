import { Router } from "express";
import { getAllSongs } from "../controller/song.controller.js";

const route= Router();

route.get("/getAllSongs",getAllSongs)


export default route