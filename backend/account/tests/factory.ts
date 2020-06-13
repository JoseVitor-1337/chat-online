import User from "../src/model/User";
import bcrypt from "bcryptjs";
import faker from "faker";
import factory from "factory-girl";

interface User {
  name?: string;
  email?: string;
  password?: string;
}

async function userFactory({
  name = faker.name.firstName(),
  email = faker.internet.email(),
  password = faker.internet.password(),
}: User) {
  const user = await User.create({
    name,
    email,
    password: await bcrypt.hash(password, 10),
  });

  return user;
}

export default userFactory;
