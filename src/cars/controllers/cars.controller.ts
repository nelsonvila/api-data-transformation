import {
  BadRequestException,
  Controller,
  Get,
  HttpCode,
  Query,
} from '@nestjs/common';
import { FilterQueryDto, OutputCarDto } from '../dto';
import { CarsService } from '../services/cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly _carsService: CarsService) {}

  @Get()
  @HttpCode(200)
  async findAll(@Query() query: FilterQueryDto): Promise<OutputCarDto> {
    const site = query.site;
    const result: OutputCarDto = await this._carsService.findAll(site);
    if (result === undefined) {
      throw new BadRequestException(
        'The request to the endpoint cars failed with an error',
      );
    }

    return result;
  }

  @Get('/health-check')
  getHealthCheck() {
    return {
      status: 'ok',
      timestamp: Number(new Date()),
    };
  }
}
