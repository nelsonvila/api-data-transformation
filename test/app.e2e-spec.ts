import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';

import { CarsService } from '../src/cars/services/cars.service';
import { AxiosResponse } from 'axios';
import { of } from 'rxjs';
import { HttpModule, HttpService } from '@nestjs/axios';
import { KarvisService } from '../src/cars/services/karvis.service';
import { AppModule } from '../src/app.module';
import { ConfigModule } from '@nestjs/config';

describe('CarsController (e2e)', () => {
  let app: INestApplication;
  let httpService: HttpService;

  beforeAll(async () => {
    const mockAppModule: TestingModule = await Test.createTestingModule({
      imports: [AppModule, HttpModule, ConfigModule.forRoot()],
      providers: [CarsService, KarvisService],
    }).compile();

    app = mockAppModule.createNestApplication();
    httpService = mockAppModule.get<HttpService>(HttpService);
    await app.init();
  });

  it('GET cars if incorrect query is entered', async () => {
    const result: AxiosResponse = {
      data: {},
      status: 400,
      statusText: 'Bad Request',
      headers: {},
      config: {},
    };
    jest.spyOn(httpService, 'get').mockImplementationOnce(() => of(result));
    const expectedGpaString =
      '{"statusCode":400,"message":"The request to the endpoint cars failed with an error","error":"Bad Request"}';

    const response = await request(app.getHttpServer())
      .get('/cars?site=br&year=DESC')
      .expect(400);
    expect(response.text).toEqual(expectedGpaString);
  });

  it('GET cars-id if incorrect ids is entered', async () => {
    const result: AxiosResponse = {
      data: {},
      status: 400,
      statusText: 'Bad Request',
      headers: {},
      config: {},
    };
    jest.spyOn(httpService, 'get').mockImplementationOnce(() => of(result));
    const expectedGpaString =
      '{"statusCode":400,"message":"No records were found containing the car ids specified.","error":"Bad Request"}';

    const response = await request(app.getHttpServer())
      .get('/cars-ids?site=br&ids=886651,123785')
      .expect(400);
    expect(response.text).toEqual(expectedGpaString);
  });
});
