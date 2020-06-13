import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import mustBeAuthenticated from "../security/mustBeAuthenticated";
import User from '../model/User'
import validateRequestBody from "../utils/validateRequestBody";

function userController() {

  async function create(request: Request, response: Response) {
    
    let errors = validateRequestBody(request.body)
    
    if (Object.keys(errors).length > 0) {
      return response.status(400).json("Dados inseridos inválidos")
    } 
    
    const { name, email, password } = request.body;

    let user = await User.findOne({ email });

    if (user) {
      return response.status(400).json("Email já registrado!")
    }

    user = await User.create({
      name,
      email,
      password: await bcrypt.hash(password, 10),
    });

    return response.json(user);
  }

  async function show(request: Request, response: Response) {
    const token = request.header("token");

    const id = mustBeAuthenticated(String(token));

    if (!id) {
      return response.status(401).json("Você não possui authorização!");
    }

    const user = await User.findById(id);

    if (!user) {
      return response.status(400).json("Usuario não encontrado!");
    }

    return response.send(user);
  }

  return {
    create,
    show,
  };
}

export default userController();
