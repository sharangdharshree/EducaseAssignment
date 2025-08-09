import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/addSchool", (req, res) => {
  res.send("Creating School....");
});

app.get("/listSchools", (req, res) => {
  res.send("fetching list of all schools....");
});

export default app;
