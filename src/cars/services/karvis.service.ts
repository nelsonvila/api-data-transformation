import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';
import { firstValueFrom } from 'rxjs';
import { CarDto } from '../dto';

@Injectable()
export class KarvisService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  private URL_KARVIS: string = this.configService.get<string>('URL_KARVIS');
  private HEADER_API_KEY: string =
    this.configService.get<string>('HEADER_API_KEY');

  async getSiteCars(site: string): Promise<CarDto[]> {
    const urlSite = `${this.URL_KARVIS}?site=${site}`;
    let cars: CarDto[];
    const requestConfig: AxiosRequestConfig = {
      headers: {
        'api-key': this.HEADER_API_KEY,
      },
    };

    await firstValueFrom(this.httpService.get(urlSite, requestConfig))
      .then((res) => {
        cars = res.data;
        return cars;
      })
      .catch((err) => console.log(`Request failed with error: ${err}`));

    return undefined;
  }
}
