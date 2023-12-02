import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Expose } from 'class-transformer';
import { AutoMap } from '@automapper/classes';
import { BaseEntity } from '@src/domain/entities/base.entity';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @AutoMap()
  @PrimaryGeneratedColumn()
  id: number;

  @AutoMap()
  @Column({
    length: 254,
  })
  email: string;

  @Column({
    length: 128,
    select: false,
  })
  password: string;

  @AutoMap()
  @Column({
    name: 'first_name',
    length: 254,
  })
  firstName: string;

  @AutoMap()
  @Column({
    name: 'last_name',
    length: 254,
    nullable: true,
  })
  lastName?: string;

  @AutoMap()
  @Column({ nullable: false })
  country: string;

  @AutoMap()
  @Column({ nullable: false })
  city: string;

  @AutoMap()
  @Column({ nullable: false })
  address: string;

  @AutoMap()
  @Column({ nullable: false })
  birthDate: Date;
  /*
  @AutoMap(() => String)
  @Column({ enum: UserSex, nullable: false })
  Gender: UserSex;
  
 */

  @AutoMap()
  @Expose()
  get fullName(): string {
    let fullName = this.firstName;

    if (this.lastName) {
      fullName = fullName.concat(' ', this.lastName);
    }

    return fullName;
  }
}
