import app from "../../src/app";
import request from "supertest";

import userFactory from "../factory";
import {
  createConnecion,
  disconnectDatabase,
  clearDatabase,
} from "../databaseConfig";

interface Teste {
  string: string;
}

describe("Router: Authentication", () => {
  beforeAll(async () => {
    await createConnecion();
  });

  beforeEach(async () => {
    await clearDatabase();
  });

  afterAll(async () => {
    await disconnectDatabase();
  });

it("POST - Must return a 400 error because credentials are invalid", async () => {
    const response = await request(app)
      .post("/authentication")
      .set("Content-Type", "application/json")
      .send({
        email: "Joãozinho@gmail.com",
        password: "errou",
      });

    expect(response.status).toBe(400);
    expect(response.body).toStrictEqual("Email e/ou senha inválidos!");
  });

  it("POST - Must authenticate with valid credentials", async () => {
    const user = await userFactory({
      // faker nun ta funcionando
      email: "Lesbo@yahoo.com",
      password: "123456",
    });

    const response = await request(app).post("/authentication").send({
      email: "Lesbo@yahoo.com",
      password: "123456",
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
  });
});
