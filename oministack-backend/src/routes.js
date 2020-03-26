import { Router } from "express";

const routes = new Router();

import OngController from "./controller/OngController";
import IncidentController from "./controller/IncidentController";
import ProfileController from "./controller/ProfileController";
import SessionController from "./controller/SessionController";

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.post("/incidents", IncidentController.create);
routes.get("/incidents", IncidentController.index);
routes.delete("/incidents/:id", IncidentController.delete);

routes.get("/profile", ProfileController.index);

export default routes;
