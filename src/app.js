import express from "express";

const app = express();

app.use(express.json());

import schoolRouter from "./routes/school.route.js";
app.use("/", schoolRouter);

export default app;
