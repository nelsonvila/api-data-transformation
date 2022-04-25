import { CarDto, FilterCarDto, FilterQueryDto, OutputCarDto } from '../dto';

export interface ICarsService {
  findAll(site: FilterQueryDto['site']): Promise<OutputCarDto>;
  orderCarsByYearAndPrice(cars: CarDto[]): CarDto[];
  setFilter(cars: CarDto[]): FilterCarDto;
  filterCarsByIds(cars: CarDto[], ids: number[]): CarDto[];
}
