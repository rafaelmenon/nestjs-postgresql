import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'rafael',
  password: 'rafael',
  database: 'rafael',
  entities: [__dirname + '/../**/*.entity.{js, ts}'],
  synchronize: true,
};
