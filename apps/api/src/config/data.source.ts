import { join } from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const DataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || 'user',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'hermes',
  entities: [join(__dirname, '..', '**', '**', '*.entity.{ts,js}')],
  migrations: [join(__dirname, '..', 'migrations', '/*{.ts,.js}')],
  migrationsRun: true,
  namingStrategy: new SnakeNamingStrategy()
};

export const AppDS = new DataSource(DataSourceConfig);
