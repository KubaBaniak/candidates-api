import { DataSource } from "typeorm";
import { JobOffer } from "./entities/JobOffer";
import { Candidate } from "./entities/Candidate";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: ":memory:",
  synchronize: true,
  logging: false,
  entities: [JobOffer, Candidate],
});
