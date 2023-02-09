import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user_model";

@Entity("contacts")
export class Contacts {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  full_name: string;

  @Column()
  email: string;

  @Column()
  telephone: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, {
    eager: true,
    onDelete: "CASCADE",
  })
  user: User;
}
