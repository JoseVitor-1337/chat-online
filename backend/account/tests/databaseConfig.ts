import mongoose from "mongoose";

import User from "../src/model/User";

export async function createConnecion() {
  if (!process.env.MONGO_URL) {
    throw new Error("MongoDB URL was not found");
  }
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
}

export async function disconnectDatabase() {
  await mongoose.connection.close();
}

export async function clearDatabase() {
  await User.deleteMany({});
}
