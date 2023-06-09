import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'test' })
export class Test {
  @PrimaryGeneratedColumn()
  id_test: number;

  @Column()
  name: string;
}
