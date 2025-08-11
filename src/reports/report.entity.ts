import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from 'src/users/user.entity';
@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  price: number;

  @Column()
  make: string;

  @Column({ default: false })
  approved: boolean;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  lng: number;

  @Column()
  lat: number;

  @Column()
  mileage: number;

  @Column()
  userId: string;

  @ManyToOne(() => User, (user) => user.reports)
  @JoinColumn({ name: 'userId' })
  user: User;
}
