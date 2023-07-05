import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Disaster from './disaster.entity';
import CreateDisasterDto from './dto/disaster.dto';

@Injectable()
class DisasterService {
  constructor(
    @InjectRepository(Disaster)
    private readonly disasterRepository: Repository<Disaster>
  ) {}

  getDisasters() {
    const disasters = this.disasterRepository.find();
    return disasters;
  }

  saveDisaster(disaster: CreateDisasterDto) {
    const newDisaster = this.disasterRepository.create(disaster);
    return this.disasterRepository.save(newDisaster);
  }

  async deleteExpiredDisasters() {
    const currentTimestamp = new Date().toISOString();

    const expiredDisasters = await this.disasterRepository
      .createQueryBuilder('disaster')
      .where(
        `(disaster.insertion_hour + disaster.duration) <= :currentTimestamp`,
        { currentTimestamp }
      )
      .getMany();

    await this.disasterRepository.remove(expiredDisasters);
  }
}

export default DisasterService;
