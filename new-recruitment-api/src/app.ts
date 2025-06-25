import express from "express";
import { CandidatesController } from "./candidates.controller";
import { AppDataSource } from "./data-source";

export const setupApp = async () => {
  await AppDataSource.initialize();

  const app = express();

  app.use(express.json());

  app.use(new CandidatesController().router);

  return app;
};
