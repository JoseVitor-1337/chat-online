import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import bcrypt from "bcryptjs";
import User from '../model/User'
;

function userController() {
  async function create(request: Request, response: Response) {
    const { email, password } = request.body;

    let user = await User.findOne({ email }).select("password")
    
    if (!user) {
      return response.status(400).json("Email e/ou senha inválidos!")
    }

    let hasMatchPassword = await bcrypt.compare(
      password,
      String(user.password)
    );

    if (!hasMatchPassword) {
      return response.status(400).json("Email e/ou senha inválidos!")
    }

    const payload = {
      id: user._id,
    };

    jwt.sign(payload, "jwtsecret", (err, token) => {
      if (err) {
        throw new Error("Generate Token Failure")
      }

      return response.json({ token })
    })
  }

  return {
    create,
  };
}

export default userController();
