import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'disaster' })
class Disaster {
  @PrimaryGeneratedColumn()
  disaster_id: number;

  @Column({ type: 'varchar', length: 30 })
  disaster_name: string;

  @Column({ type: 'time' })
  duration: string;

  @Column({ type: 'time', default: () => 'CURRENT_TIME' })
  insertion_hour: string;

  @Column({ type: 'decimal' })
  latitude: number;

  @Column({ type: 'decimal' })
  longitude: number;
}

export default Disaster;
