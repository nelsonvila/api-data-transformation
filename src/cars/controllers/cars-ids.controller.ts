import {
  BadRequestException,
  Controller,
  Get,
  HttpCode,
  Query,
} from '@nestjs/common';
import { CarDto, FilterQueryDto } from '../dto';
import { CarsService } from '../services/cars.service';

@Controller('cars-ids')
export class CarsIdsController {
  constructor(private readonly _carsService: CarsService) {}

  @Get()
  @HttpCode(200)
  async findCars(@Query() query: FilterQueryDto): Promise<CarDto[]> {
    const site = query.site;
    const ids = query.ids;
    const result: CarDto[] = await this._carsService.findAllByIds(site, ids);

    if (result === undefined) {
      throw new BadRequestException(
        'No records were found containing the car ids specified.',
      );
    }

    return result;
  }
}
