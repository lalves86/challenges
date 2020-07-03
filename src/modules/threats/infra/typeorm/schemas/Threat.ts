import {
  ObjectID,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
} from 'typeorm';
import Hero from '@modules/heroes/infra/typeorm/entities/Hero';
import IAttackDTO from '@modules/threats/dtos/IAttackDTO';

@Entity('threats')
class Threat {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  attack: IAttackDTO;

  @Column()
  contention: Hero[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default Threat;
