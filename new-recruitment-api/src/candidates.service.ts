import { AppDataSource } from "./data-source";
import { CandidateDTO } from "./dto/candidate-dto";
import { Candidate } from "./entities/Candidate";

export class CandidatesService {
  private readonly candidateRepo = AppDataSource.getRepository(Candidate);

  isCreateRequestValid(candidate: CandidateDTO): boolean {
    if (
      !candidate.firstName ||
      !candidate.lastName ||
      !candidate.email ||
      !candidate.phoneNumber ||
      !candidate.experienceYears
    ) {
      console.error("invalid");
      return false;
    }

    return true;
  }

  createCandidate(candidateData: CandidateDTO) {
    const candidate = this.candidateRepo.create({
      ...candidateData,
      status: "nowy",
      applicationDate: Date.now(),
    });

    return this.candidateRepo.save(candidate);
  }

  getAllCandidates() {
    return this.candidateRepo.find({
      relations: ["jobOffers"],
    });
  }
}
