import { In } from "typeorm";
import { AppDataSource } from "./data-source";
import { CandidateDTO } from "./dto/candidate-dto";
import { Candidate } from "./entities/Candidate";
import { JobOffer } from "./entities/JobOffer";

export class CandidatesService {
  private readonly candidateRepo = AppDataSource.getRepository(Candidate);
  private readonly jobOfferRepo = AppDataSource.getRepository(JobOffer);

  isCreateRequestValid(candidate: CandidateDTO): boolean {
    if (
      !candidate.firstName ||
      !candidate.lastName ||
      !candidate.email ||
      !candidate.phoneNumber ||
      !candidate.experienceYears
    ) {
      return false;
    }

    if (!candidate.jobOfferIds || !(candidate.jobOfferIds.length > 0)) {
      return false;
    }

    return true;
  }

  async createCandidate(candidateData: CandidateDTO) {
    let jobOffers: JobOffer[] = [];

    jobOffers = await AppDataSource.getRepository(JobOffer).find({
      where: { id: In(candidateData.jobOfferIds) },
    });

    const candidate = this.candidateRepo.create({
      ...candidateData,
      status: "nowy",
      applicationDate: Date.now(),
      jobOffers: jobOffers,
    });

    return this.candidateRepo.save(candidate);
  }

  async getAllCandidates(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const [data, total] = await this.candidateRepo.findAndCount({
      relations: ["jobOffers"],
      skip,
      take: limit,
      order: {
        applicationDate: "DESC",
      },
    });

    return {
      data,
      total,
      page,
      pageCount: Math.ceil(total / limit),
    };
  }
}
