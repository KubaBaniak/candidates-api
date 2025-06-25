import { Request, Response, Router } from "express";
import { CandidateDTO } from "./dto/candidate-dto";
import { CandidatesService } from "./candidates.service";

export class CandidatesController {
  readonly router = Router();
  private readonly candidateService = new CandidatesService();

  constructor() {
    this.router.get("/candidates", this.getAll.bind(this));
    this.router.post("/candidates", this.create.bind(this));
  }

  async getAll(req: Request, res: Response) {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    try {
      const paginatedCandidates = await this.candidateService.getAllCandidates(
        page,
        limit,
      );
      res.json(paginatedCandidates);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch candidates" });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const createCandidateRequest: CandidateDTO = req.body;

      if (!this.candidateService.isCreateRequestValid(createCandidateRequest)) {
        return res.status(400).json({ error: "Invalid data." });
      }

      const result = await this.candidateService.createCandidate(
        createCandidateRequest,
      );

      res.status(201).json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Error while saving the candidate." });
    }
  }
}
