import mongoose from "mongoose";

export default async function createDatabaseConnection(url: string) {
  await mongoose.connect(url, {
    useFindAndModify: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
}
