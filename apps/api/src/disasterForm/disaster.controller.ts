import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import Disaster from './disaster.entity';
import DisasterService from './disaster.service';
import CreateDisasterDto from './dto/disaster.dto';

@Controller('Disaster')
class DisasterController {
  constructor(private readonly disasterService: DisasterService) {}

  @Get()
  getDisasters(): Promise<Disaster[]> {
    return this.disasterService.getDisasters();
  }

  @Post()
  saveDisaster(@Body() disaster: CreateDisasterDto): Promise<Disaster> {
    return this.disasterService.saveDisaster(disaster);
  }

  @Delete()
  deleteDisaster() {
    return this.disasterService.deleteExpiredDisasters();
  }
}

export default DisasterController;
