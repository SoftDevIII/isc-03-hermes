import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import DisasterController from './disaster.controller';
import Disaster from './disaster.entity';
import DisasterService from './disaster.service';

@Module({
  imports: [TypeOrmModule.forFeature([Disaster])],
  controllers: [DisasterController],
  providers: [DisasterService]
})
export default class DisasterModule {}
