import  { Router } from "express";
import { authCallback } from "../controller/auth.controller.js";

const route= Router();

route.post("/callback",authCallback)


export default route