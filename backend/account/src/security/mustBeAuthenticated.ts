import jwt from "jsonwebtoken";

export default function mustBeAuthenticated(token: string) {
  try {
    const { id } = Object(jwt.verify(token, "jwtsecret"));

    return id;
  } catch (error) {
    console.log(error)
  }
}
