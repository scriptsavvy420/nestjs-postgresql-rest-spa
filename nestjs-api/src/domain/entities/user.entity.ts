import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Expose } from 'class-transformer';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'first_name',
    length: 254,
  })
  firstName: string;

  @Column({
    name: 'middle_name',
    length: 254,
    nullable: true,
  })
  middleName?: string;

  @Column({
    name: 'last_name',
    length: 254,
    nullable: true,
  })
  lastName?: string;

  @Expose()
  get fullName(): string {
    let fullName = this.firstName;

    if (this.middleName) {
      fullName = fullName.concat(' ', this.middleName);
    }
    if (this.lastName) {
      fullName = fullName.concat(' ', this.lastName);
    }

    return fullName;
  }
}
