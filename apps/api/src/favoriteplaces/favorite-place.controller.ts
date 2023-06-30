import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post
} from '@nestjs/common';
import FavoritePlaceDto from './favorite-place.dto';
import FavoritePlaceService from './favorite-place.service';

@Controller('favorite-place')
class FavoritePlaceController {
  constructor(private readonly favoritePlaceService: FavoritePlaceService) {}

  @Post()
  addFavoritePlace(@Body() favoritePlaceDto: FavoritePlaceDto): Promise<void> {
    return this.favoritePlaceService.markPlaceAsFavorite(
      favoritePlaceDto.customerId,
      favoritePlaceDto.placeId
    );
  }

  @Get(':customerId/favorite-places')
  getFavoritePlaces(
    @Param('customerId', ParseIntPipe) customerId: number
  ): Promise<string[]> {
    return this.favoritePlaceService.getFavoritePlaces(customerId);
  }
}

export default FavoritePlaceController;
