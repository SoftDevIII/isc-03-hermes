import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { DataSourceConfig } from './config/data.source';
import CustomerModule from './customer/customer.module';
import DisasterModule from './disasterForm/disaster.module';
import ExampleModule from './example/example.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client/dist')
    }),
    TypeOrmModule.forRoot({
      ...DataSourceConfig
    }),
    ExampleModule,
    CustomerModule,
    DisasterModule
  ]
})
export default class AppModule {}
