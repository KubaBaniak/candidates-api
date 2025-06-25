import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Candidate } from "./Candidate";

@Entity()
export class JobOffer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  salary_range: string;

  @Column({ nullable: true })
  location: string;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;

  @ManyToMany(() => Candidate, (candidate) => candidate.jobOffers)
  @JoinTable()
  candidates: Candidate[];
}
