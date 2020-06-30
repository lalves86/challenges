import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('heroes')
class Hero {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  rank: string;
}

export default Hero;
