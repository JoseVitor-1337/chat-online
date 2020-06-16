import { Schema, Document, model } from "mongoose";

interface IUserSchema extends Document {
  name?: string;
  email?: string;
  password?: string;
}

const UserSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    select: false,
  },
});

export default model<IUserSchema>("User", UserSchema);
