import request from "supertest";
import { Application } from "express";
import { setupApp } from "../app";
import { faker } from "@faker-js/faker";

describe("Get Candidates", () => {
  let app: Application;

  beforeAll(async () => {
    app = await setupApp();
  });

  it("should return a list of candidates", async () => {
    const testCandidate = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.number(),
      experienceYears: faker.number.int({ min: 1, max: 10 }),
      status: "nowy",
      applicationDate: faker.date.past().toISOString().split("T")[0],
      jobOfferIds: [1, 2],
    };
    await request(app).post("/candidates").send(testCandidate);

    const response = await request(app).get("/candidates");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0].firstName).toBe(testCandidate.firstName);
    expect(response.body[0].email).toBe(testCandidate.email);
  });
});
