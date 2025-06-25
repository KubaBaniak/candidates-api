export enum RecruitmentStage {
  NEW = "nowy",
  IN_PROGRESS = "w trakcie rozmów",
  ACCEPTED = "zaakceptowany",
  REJECTED = "odrzucony",
}

export class CandidateDTO {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  experienceYears: number;
  notes: string;
  status: RecruitmentStage;
  applicationDate: Date;
  jobOfferIds: number[];
}
