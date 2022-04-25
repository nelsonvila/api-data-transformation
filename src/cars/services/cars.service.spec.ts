import { Test, TestingModule } from '@nestjs/testing';
import { CarDto, OutputCarDto } from '../dto';
import { CarsService } from './cars.service';
import { KarvisService } from './karvis.service';

class ApiServiceMockBr {
  async getSiteCars() {
    return [
      {
        id: 332379,
        city: 'Feira de Santana',
        state: 'BA',
        year: '2018/2019',
        brand: 'PEUGEOT',
        model: '3008',
        version: '1.6 GRIFFE PACK THP 16V GASOLINA 4P AUTOMATICO',
        price: 154700,
        mileage: 73261,
        image:
          'https://photo-b2b-autoaction.storage.googleapis.com/autoaction_prod/04ff20dc-971a-546f-93ac-2cdea9471e50-1jpg.jpg',
        certificate: false,
        promoted: false,
      },
      {
        id: 349970,
        city: 'Santos',
        state: 'SP',
        year: '2017/2018',
        brand: 'VOLKSWAGEN',
        model: 'FOX',
        version: '1.6 MSI TOTAL FLEX XTREME 4P MANUAL',
        price: 63890,
        mileage: 79353,
        image:
          'https://photo-b2b-autoaction.storage.googleapis.com/autoaction_prod/b041b96b-652c-f8f0-d27f-bae4586923d0-01jpg.jpg',
        certificate: true,
        promoted: false,
      },
    ];
  }
}

class ApiServiceMockAr {
  async getSiteCars() {
    return [
      {
        id: 123456,
        city: 'San Miguel de Tucuman',
        state: 'Tucuman',
        year: '2020',
        brand: 'FORD',
        model: 'Focus',
        version: '2.0 SE PLUS 8V GASOLINA 5P MANUAL',
        price: 3502700,
        mileage: 80000,
        image:
          'https://photo-b2b-autoaction.storage.googleapis.com/autoaction_prod/04ff20dc-971a-546f-93ac-2cdea9471e50-1jpg.jpg',
        certificate: false,
        promoted: false,
      },
      {
        id: 789123,
        city: 'San Salvador de Jujuy',
        state: 'Jujuy',
        year: '2018',
        brand: 'FIAT',
        model: 'Argo',
        version: '1.5 DRIVE 8V GASOLINA 5P MANUAL',
        price: 2800500,
        mileage: 75000,
        image:
          'https://photo-b2b-autoaction.storage.googleapis.com/autoaction_prod/b041b96b-652c-f8f0-d27f-bae4586923d0-01jpg.jpg',
        certificate: true,
        promoted: false,
      },
    ];
  }
}

describe('ApiServiceMockBr', () => {
  let app: TestingModule;
  let carsService: CarsService;

  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: KarvisService,
      useClass: ApiServiceMockBr,
    };
    app = await Test.createTestingModule({
      providers: [ApiServiceProvider, CarsService],
    }).compile();
    carsService = app.get<CarsService>(CarsService);
  });

  describe('findAll', () => {
    it('should findAll cars from br', async () => {
      const outCarsBr: OutputCarDto = {
        item: [
          {
            id: 332379,
            city: 'Feira de Santana',
            state: 'BA',
            year: '2018/2019',
            brand: 'PEUGEOT',
            model: '3008',
            version: '1.6 GRIFFE PACK THP 16V GASOLINA 4P AUTOMATICO',
            price: 154700,
            mileage: 73261,
            image:
              'https://photo-b2b-autoaction.storage.googleapis.com/autoaction_prod/04ff20dc-971a-546f-93ac-2cdea9471e50-1jpg.jpg',
            certificate: false,
            promoted: false,
          },
          {
            id: 349970,
            city: 'Santos',
            state: 'SP',
            year: '2017/2018',
            brand: 'VOLKSWAGEN',
            model: 'FOX',
            version: '1.6 MSI TOTAL FLEX XTREME 4P MANUAL',
            price: 63890,
            mileage: 79353,
            image:
              'https://photo-b2b-autoaction.storage.googleapis.com/autoaction_prod/b041b96b-652c-f8f0-d27f-bae4586923d0-01jpg.jpg',
            certificate: true,
            promoted: false,
          },
        ],
        filter: {
          brand: ['Feira de Santana', 'Santos'],
          city: ['PEUGEOT', 'VOLKSWAGEN'],
          model: ['3008', 'FOX'],
          state: ['BA', 'SP'],
        },
      };
      const cars = await carsService.findAll('br');
      expect(cars).toEqual(outCarsBr);
    });
  });
  describe('findAllByIds', () => {
    it('should findAllByIds cars from br successful, with correct id', async () => {
      const outCarsByIdsBr: CarDto[] = [
        {
          id: 332379,
          city: 'Feira de Santana',
          state: 'BA',
          year: '2018/2019',
          brand: 'PEUGEOT',
          model: '3008',
          version: '1.6 GRIFFE PACK THP 16V GASOLINA 4P AUTOMATICO',
          price: 154700,
          mileage: 73261,
          image:
            'https://photo-b2b-autoaction.storage.googleapis.com/autoaction_prod/04ff20dc-971a-546f-93ac-2cdea9471e50-1jpg.jpg',
          certificate: false,
          promoted: false,
        },
      ];
      const cars = await carsService.findAllByIds('br', '332379');
      expect(cars).toEqual(outCarsByIdsBr);
    });
    it('should findAllByIds cars from br failed, with incorrect id', async () => {
      const outCarsByIdsBr: CarDto[] = undefined;

      const cars = await carsService.findAllByIds('br', '1234');
      expect(cars).toEqual(outCarsByIdsBr);
    });
  });
});

describe('ApiServiceMockAr', () => {
  let app: TestingModule;
  let carsService: CarsService;

  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: KarvisService,
      useClass: ApiServiceMockAr,
    };
    app = await Test.createTestingModule({
      providers: [ApiServiceProvider, CarsService],
    }).compile();
    carsService = app.get<CarsService>(CarsService);
  });

  describe('findAll', () => {
    it('should findAll cars from ar', async () => {
      const outCarsAr: OutputCarDto = {
        item: [
          {
            id: 123456,
            city: 'San Miguel de Tucuman',
            state: 'Tucuman',
            year: '2020',
            brand: 'FORD',
            model: 'Focus',
            version: '2.0 SE PLUS 8V GASOLINA 5P MANUAL',
            price: 3502700,
            mileage: 80000,
            image:
              'https://photo-b2b-autoaction.storage.googleapis.com/autoaction_prod/04ff20dc-971a-546f-93ac-2cdea9471e50-1jpg.jpg',
            certificate: false,
            promoted: false,
          },
          {
            id: 789123,
            city: 'San Salvador de Jujuy',
            state: 'Jujuy',
            year: '2018',
            brand: 'FIAT',
            model: 'Argo',
            version: '1.5 DRIVE 8V GASOLINA 5P MANUAL',
            price: 2800500,
            mileage: 75000,
            image:
              'https://photo-b2b-autoaction.storage.googleapis.com/autoaction_prod/b041b96b-652c-f8f0-d27f-bae4586923d0-01jpg.jpg',
            certificate: true,
            promoted: false,
          },
        ],
        filter: {
          brand: ['San Miguel de Tucuman', 'San Salvador de Jujuy'],
          city: ['FORD', 'FIAT'],
          model: ['Focus', 'Argo'],
          state: ['Tucuman', 'Jujuy'],
        },
      };
      const cars = await carsService.findAll('ar');
      expect(cars).toEqual(outCarsAr);
    });
  });
  describe('findAllByIds', () => {
    it('should findAllByIds cars from ar successful, with correct id', async () => {
      const outCarsByIdsBr: CarDto[] = [
        {
          id: 123456,
          city: 'San Miguel de Tucuman',
          state: 'Tucuman',
          year: '2020',
          brand: 'FORD',
          model: 'Focus',
          version: '2.0 SE PLUS 8V GASOLINA 5P MANUAL',
          price: 3502700,
          mileage: 80000,
          image:
            'https://photo-b2b-autoaction.storage.googleapis.com/autoaction_prod/04ff20dc-971a-546f-93ac-2cdea9471e50-1jpg.jpg',
          certificate: false,
          promoted: false,
        },
      ];
      const cars = await carsService.findAllByIds('ar', '123456');
      expect(cars).toEqual(outCarsByIdsBr);
    });
    it('should findAllByIds cars from ar failed, with incorrect id', async () => {
      const outCarsByIdsBr: CarDto[] = undefined;

      const cars = await carsService.findAllByIds('br', '4321');
      expect(cars).toEqual(outCarsByIdsBr);
    });
  });
});
