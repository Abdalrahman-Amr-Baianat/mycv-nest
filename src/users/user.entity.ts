import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;
  @Column()
  password: string;

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
