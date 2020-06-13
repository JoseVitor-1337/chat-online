import { Router } from "express";

import User from "./controllers/User";
import Authentication from "./controllers/Authentication";


const routes = Router();

routes.post("/user", User.create);
routes.get("/user", User.show);

routes.post("/authentication", Authentication.create);

export default routes;
