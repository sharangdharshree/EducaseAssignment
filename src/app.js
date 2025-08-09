import express from "express";

const app = express();

import schoolRouter from "./routes/school.route.js";
app.use("/", schoolRouter);

export default app;
