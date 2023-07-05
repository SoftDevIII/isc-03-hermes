import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'customer' })
class Customer {
  @PrimaryGeneratedColumn()
  customer_id: number;

  @Column()
  password: string;

  @Column()
  email: string;
}

export default Customer;
