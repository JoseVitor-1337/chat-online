import app from "../../src/app";
import request from "supertest";

import userFactory from "../factory";
import {
  createConnecion,
  disconnectDatabase,
  clearDatabase,
} from "../databaseConfig";

describe("Router: User", () => {
  beforeAll(async () => {
    await createConnecion();
  });

  beforeEach(async () => {
    await clearDatabase();
  });

  afterAll(async () => {
    await disconnectDatabase();
  });

  it("POST - Create new use account", async () => {
    const response = await request(app).post("/user").send({
      name: "Jose Vitor",
      email: "Jose@gmail.com",
      password: "123456",
    });

    expect(response.body).toHaveProperty("_id");
  });

  it("POST - Must have error because email already registered", async () => {
    const user = await userFactory({});

    const response = await request(app).post("/user").send({
      name: "Vitor Jose",
      email: user.email,
      password: "123456",
    });

    expect(response.status).toBe(400);
    expect(response.body).toStrictEqual("Email já registrado!");
  });

  it("GET - Must have error 401 error because token is not defined", async () => {
    const user = await userFactory({});

    const response = await request(app).get(`/user`);

    expect(response.status).toBe(401);
    expect(response.body).toStrictEqual("Você não possui authorização!");
  });

  it("GET - return a user that has authotization", async () => {
    const user = await userFactory({
      // faker nun ta funcionando
      email: "Manolo@gmail.com",
      password: "123456781",
    });

    const result = await request(app)
      .post("/authentication")
      .set("Content-Type", "application/json")
      .send({
        email: "Manolo@gmail.com",
        password: "123456781",
      });

    let { token } = result.body;

    const response = await request(app).get(`/user`).set("token", token);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("_id");
  });
});
