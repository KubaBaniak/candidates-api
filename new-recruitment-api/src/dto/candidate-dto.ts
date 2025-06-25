export enum RecruitmentStage {
  NEW = "nowy",
  IN_PROGRESS = "w trakcie rozmów",
  ACCEPTED = "zaakceptowany",
  REJECTED = "odrzucony",
}

export class CandidateDTO {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  experience: number;
  additionalNotes: string;
  stage: RecruitmentStage;
  applicationDate: Date;
}
