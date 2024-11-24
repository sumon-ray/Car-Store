import express, { Application, Request, Response } from "express";
import cors from "cors";
// import { studentRoute } from "./app/modules/student/student.route";
import { useRouter } from "./app/modules/car/car.route";
import { orderRouter } from "./app/modules/order/order.route";
const app: Application = express();
// const port = 3000;

// parser  // middleware --> standard to say
app.use(express.json());
app.use(cors());

app.use("/api/cars", useRouter);

// order api
app.use("/api/orders", orderRouter);

const getAController = (req: Request, res: Response) => {
  res.send("hello world");
};
app.get("/", getAController);

export default app;
