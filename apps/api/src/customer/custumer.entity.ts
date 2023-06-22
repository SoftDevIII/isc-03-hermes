import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'customer' })
class Customer {
  @PrimaryGeneratedColumn()
  CustomerID: number;

  @Column()
  CustomerName: string;

  @Column()
  Password: string;

  @Column()
  Email: string;
}

export default Customer;
