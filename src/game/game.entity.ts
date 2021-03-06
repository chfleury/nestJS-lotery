import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Bet } from 'src/bet/bet.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ unique: true })
  type: string;

  @Column({})
  description: string;

  @Column({})
  range: number;

  @Column({ type: 'float' })
  price: number;

  @Column({})
  maxNumber: number;

  @Column({})
  color: string;

  @OneToMany(() => Bet, (bet) => bet.gameId)
  users: Bet[];

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updatedAt: Date;
}
