import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import RoutDisaster from './disaster.entity';
import CreateDisasterDto from './dto/disaster.dto';

@Injectable()
class DisasterService {
  constructor(
    @InjectRepository(RoutDisaster)
    private readonly disasterRepository: Repository<RoutDisaster>
  ) {}

  getDisasters() {
    return this.disasterRepository.find();
  }

  saveDisaster(disaster: CreateDisasterDto) {
    const newDisaster = this.disasterRepository.create(disaster);
    return this.disasterRepository.save(newDisaster);
  }
}

export default DisasterService;
