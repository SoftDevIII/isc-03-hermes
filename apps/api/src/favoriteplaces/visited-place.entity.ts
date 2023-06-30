import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import Place from './place.entity';

@Entity({ name: 'VisitedPlace' })
class VisitedPlace {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerId: number;

  @Column()
  placeId: number;

  @Column({ name: 'IsFavorite', default: false })
  isFavorite: boolean;

  @ManyToOne(() => Place)
  @JoinColumn({ name: 'placeId' })
  place: Place;
}

export default VisitedPlace;
