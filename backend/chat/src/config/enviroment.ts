import dotenv from "dotenv";

dotenv.config();

export const API_PORT = process.env.API_PORT || 5000;
export const REDIS_PORT = Number(process.env.REDIS_PORT) || 6379;
export const REDIS_HOST = process.env.REDIS_HOST || "127.0.0.1";
