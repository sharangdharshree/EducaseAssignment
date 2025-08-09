import "dotenv/config";
import app from "./app.js";
import connectDB from "./db/db.js";

// call connectDB to create db connection
// if success then listen server at desired port
connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Express is not able to communicate with DB: ", error);
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log("server listening at port: 3000");
    });
  })
  .catch((err) => {
    console.log("MySql connection failed: ", err);
  });
