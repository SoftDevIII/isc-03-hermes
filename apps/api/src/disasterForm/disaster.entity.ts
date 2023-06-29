import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'RoutDisaster' })
class Disaster {
  @PrimaryColumn()
  disaster_id: number;

  @Column()
  disasterName: string;

  @Column()
  duracion: string;

  @Column()
  insertionHour: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;
}

export default Disaster;
