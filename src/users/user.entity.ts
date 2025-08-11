import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Report } from 'src/reports/report.entity';
import { report } from 'process';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column({default:true})
  admin:boolean

  @Column()
  password: string;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];
  @AfterInsert()
  logInsert() {
    console.log('new user inserted', this.id);
  }
  @AfterUpdate()
  logUpdate() {
    console.log('user updated', this.id);
  }
  @AfterRemove()
  logRemove() {
    console.log('Removed user with id', this.id);
  }
}
