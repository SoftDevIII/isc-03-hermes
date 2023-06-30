import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Place' })
class Place {
  @PrimaryGeneratedColumn()
  PlaceID: number;

  @Column()
  PlaceName: string;

  @Column()
  PlaceDescription: string;

  @Column()
  Coordinates: string;

  @Column()
  IsCommonPlace: boolean;

  @Column()
  Status: string;
}

export default Place;
