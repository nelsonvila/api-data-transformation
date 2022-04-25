import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

import { CarsService } from './services/cars.service';
import { KarvisService } from './services/karvis.service';
import { CarsController } from './controllers/cars.controller';
import { AuditMiddleware } from '../middlewares/audit.middleware';
import { CarsIdsController } from './controllers/cars-ids.controller';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  providers: [CarsService, KarvisService],
  controllers: [CarsController, CarsIdsController],
  exports: [CarsService, KarvisService],
})
export class CarsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuditMiddleware).forRoutes(
      {
        path: 'cars',
        method: RequestMethod.ALL,
      },
      {
        path: 'cars-ids',
        method: RequestMethod.ALL,
      },
    );
  }
}
