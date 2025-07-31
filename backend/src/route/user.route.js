import {Router} from "express";
import { getAllUsers } from "../controller/user.controller.js";
import { getMessages } from "../controller/user.controller.js";

import {protectRoute} from "../middleware/auth.middleware.js";

const route= Router();


route.get("/",protectRoute,getAllUsers)
route.get("/getAllMessages",getMessages)

route.get("/test", (req, res) => {
  console.log("Test ruta pozvana");
  res.json({ message: "Ruta radi!" });
});
export default route