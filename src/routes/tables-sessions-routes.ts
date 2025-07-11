import { Router } from "express";
import { TablesSessionsControllers } from "@/controllers/tables-sessions-controllers";

const tableSessionsRoutes = Router();
const tableSessionsControllers = new TablesSessionsControllers();

tableSessionsRoutes.get("/", tableSessionsControllers.index);
tableSessionsRoutes.post("/", tableSessionsControllers.create);
tableSessionsRoutes.put("/:id", tableSessionsControllers.update);

export { tableSessionsRoutes };
