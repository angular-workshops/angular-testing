import { HeroService } from './hero.service';
import { Hero } from 'app/shared/hero';

describe('HeroService', () => {
  describe('getHeroes', () => {

    let heroes: Hero[];
    let mockResponse: any;
    let mockHttp: any;

    beforeEach(() => {
      heroes = [
        {id: 2, name: 'Rubberman', strength: 1, age: 20},
        {id: 4, name: 'Dynama', strength: 11, age: 26},
      ];
      mockResponse = {
        toPromise() {
          return Promise.resolve({ json: () => ({ data: heroes }) });
        }
      };
      mockHttp = jasmine.createSpyObj('mockHttp', ['get', 'post', 'put', 'delete']);
      mockHttp.get.and.returnValue(mockResponse);
    });

    it('should return a promise to heroes retrieved via HTTP (using done)');
  });
});

