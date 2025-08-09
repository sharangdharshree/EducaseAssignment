import { Sequelize } from "sequelize";

// create db connection
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
  }
);

// Test connection
const connectDB = async () => {
  try {
    (async () => {
      await sequelize.authenticate();
      await sequelize.sync();
      console.log(
        "✅ DB Connection has been established and synced successfully."
      );
    })();
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
    process.exit(1);
  }
};

export { sequelize, connectDB };
