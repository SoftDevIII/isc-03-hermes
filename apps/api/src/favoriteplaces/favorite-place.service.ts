import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import VisitedPlace from './visited-place.entity';

@Injectable()
class FavoritePlaceService {
  constructor(
    @InjectRepository(VisitedPlace)
    private readonly visitedPlaceRepository: Repository<VisitedPlace>
  ) {}

  async markPlaceAsFavorite(
    customerId: number,
    placeId: number
  ): Promise<void> {
    try {
      const visitedPlace = await this.visitedPlaceRepository.findOne({
        where: { customerId, placeId }
      });

      if (!visitedPlace) {
        throw new Error('Visited place not found.');
      }

      visitedPlace.isFavorite = true;
      await this.visitedPlaceRepository.save(visitedPlace);
    } catch (error: any) {
      throw new Error(error as string);
    }
  }

  async getFavoritePlaces(customerId: number): Promise<string[]> {
    try {
      const favoritePlaces = await this.visitedPlaceRepository.find({
        where: { customerId, isFavorite: true },
        relations: ['place']
      });

      return favoritePlaces.map(place => place.place.PlaceName);
    } catch (error: any) {
      throw new Error(error as string);
    }
  }
}

export default FavoritePlaceService;
