import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { DataSourceConfig } from './config/data.source';
import ExampleModule from './example/example.module';
<<<<<<< HEAD
import CustomerModule from './customer/customer.module';
=======
import RegexModule from './regex/regex.module';
>>>>>>> feat: implement regex account creation validation

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client/dist')
    }),
    TypeOrmModule.forRoot({
      ...DataSourceConfig
    }),
    ExampleModule,
<<<<<<< HEAD
    CustomerModule
=======
    RegexModule
>>>>>>> feat: implement regex account creation validation
  ]
})
export default class AppModule {}
