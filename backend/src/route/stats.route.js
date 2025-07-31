import { Router } from "express";
import { getStats } from "../controller/admin.controller.js";

const route= Router();

route.get("/getStats",getStats)

export default route