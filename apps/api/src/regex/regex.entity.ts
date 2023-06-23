import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'customer' })
class Regex {
  @PrimaryGeneratedColumn()
  customer_id: number;

  @Column()
  customer_name: string;

  @Column()
  customer_last_name: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  customer_country: string;
}

export default Regex;
