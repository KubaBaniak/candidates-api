import request from "supertest";
import { Application } from "express";
import { setupApp } from "../app";
import { faker } from "@faker-js/faker";

describe("Create Candidate", () => {
  let app: Application;

  beforeAll(async () => {
    app = await setupApp();
  });

  it("should create a new candidate successfully", async () => {
    const response = await request(app)
      .post("/candidates")
      .send({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        experienceYears: faker.number.int({ min: 1, max: 10 }),
        status: "nowy",
        applicationDate: faker.date.past().toISOString().split("T")[0],
        jobOfferIds: [1, 2],
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.firstName).toBeDefined();
  });

  it("should return 400 if required fields are missing", async () => {
    const response = await request(app).post("/candidates").send({
      email: faker.internet.email(),
    });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error");
  });
});
