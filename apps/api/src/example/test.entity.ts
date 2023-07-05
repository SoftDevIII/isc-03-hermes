import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'test' })
class Test {
  @PrimaryGeneratedColumn()
  id_test: number;

  @Column()
  name: string;
}

export default Test;
