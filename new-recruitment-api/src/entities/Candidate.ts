import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { JobOffer } from "./JobOffer";

@Entity()
export class Candidate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  experienceYears: number;

  @Column({ nullable: true })
  notes: string;

  @Column()
  status: "nowy" | "w trakcie rozmów" | "zaakceptowany" | "odrzucony";

  @Column()
  applicationDate: Date;

  @ManyToMany(() => JobOffer, (jobOffer) => jobOffer.candidates)
  jobOffers: JobOffer[];
}
