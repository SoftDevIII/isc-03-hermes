import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { DataSourceConfig } from './config/data.source';
import ExampleModule from './example/example.module';
import RegexModule from './regex/regex.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client/dist')
    }),
    TypeOrmModule.forRoot({
      ...DataSourceConfig
    }),
    ExampleModule,
    RegexModule
  ]
})
export default class AppModule {}
