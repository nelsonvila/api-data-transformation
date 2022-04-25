import { Injectable } from '@nestjs/common';

import { CarDto, FilterCarDto, FilterQueryDto, OutputCarDto } from '../dto';
import { ICarsService } from '../interfaces/car.service.interface';
import { KarvisService } from './karvis.service';

@Injectable()
export class CarsService implements ICarsService {
  constructor(private readonly karvisService: KarvisService) {}

  async findAll(site: FilterQueryDto['site']): Promise<OutputCarDto> {
    const responseKarvisCars: CarDto[] = await this.karvisService.getSiteCars(
      site,
    );
    if (responseKarvisCars !== undefined) {
      const carsOrdered = this.orderCarsByYearAndPrice(responseKarvisCars);

      const outCars = new OutputCarDto();
      outCars.item = carsOrdered;
      outCars.filter = this.setFilter(carsOrdered);
      return outCars;
    }

    return undefined;
  }

  async findAllByIds(
    site: FilterQueryDto['site'],
    ids: FilterQueryDto['ids'],
  ): Promise<CarDto[]> {
    const idSplit = ids.split(',').map((id: string) => {
      return Number(id);
    });
    const responseKarvisCars = await this.karvisService.getSiteCars(site);
    if (responseKarvisCars !== undefined) {
      const carsFilters: CarDto[] = this.filterCarsByIds(
        responseKarvisCars,
        idSplit,
      );
      if (Object.keys(carsFilters).length !== 0) {
        return carsFilters;
      }
    }

    return undefined;
  }

  orderCarsByYearAndPrice(cars: CarDto[]): CarDto[] {
    return cars.sort((a: CarDto, b: CarDto) => {
      const firstCarYear = a.year.split('/');
      const secondCarYear = b.year.split('/');

      if (firstCarYear[0] < secondCarYear[0]) {
        return 1;
      } else if (firstCarYear[0] > secondCarYear[0]) {
        return -1;
      } else if (a.price > b.price) {
        return 1;
      } else if (a.price < b.price) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  setFilter(cars: CarDto[]): FilterCarDto {
    const citys = [
      ...new Set(
        cars.map((car: CarDto) => {
          return car.city;
        }),
      ),
    ];

    const brands = [
      ...new Set(
        cars.map((car: CarDto) => {
          return car.brand;
        }),
      ),
    ];

    const models = [
      ...new Set(
        cars.map((car: CarDto) => {
          return car.model;
        }),
      ),
    ];

    const states = [
      ...new Set(
        cars.map((car: CarDto) => {
          return car.state;
        }),
      ),
    ];

    const filterResult = new FilterCarDto();

    filterResult.brand = citys;
    filterResult.city = brands;
    filterResult.model = models;
    filterResult.state = states;

    return filterResult;
  }

  filterCarsByIds(cars: CarDto[], ids: number[]): CarDto[] {
    return cars.filter((car: CarDto) => {
      return ids.includes(car.id);
    });
  }
}
