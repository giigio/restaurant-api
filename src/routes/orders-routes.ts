import { Router } from "express";
import { OrdersController } from "../controllers/orders-controller";

const orderRoutes = Router();
const ordersController = new OrdersController();

orderRoutes.get("/table-session/:table_session_id", ordersController.index);
orderRoutes.get(
  "/table-session/:table_session_id/total",
  ordersController.show
);
orderRoutes.post("/", ordersController.create);

export { orderRoutes };
