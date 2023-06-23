import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'customer' })
class Customer {
  @PrimaryGeneratedColumn()
  customer_id: number;

  @Column({ nullable: true })
  customer_name: string;

  @Column()
  password: string;

  @Column()
  email: string;
}

export default Customer;
