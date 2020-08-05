import dotenv from "dotenv";

dotenv.config();

const enviroment = {
  port: process.env.API_PORT || 5050,
  database_url: process.env.MONGO_URL || "",
  jwtSecret: process.env.JWT_SECRET || "secret",
};

export default enviroment;
