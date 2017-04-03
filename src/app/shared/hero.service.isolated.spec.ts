import { async, fakeAsync, tick } from '@angular/core/testing';
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

    it('should return a promise to heroes retrieved via HTTP (using done)', (done) => {
      const service = new HeroService(mockHttp);
      service.getHeroes().then(response => {
        expect(response).toEqual(heroes);
        done();
      });
    });

    it('should return a promise to heroes retrieved via HTTP (using async)', async(() => {
      const service = new HeroService(mockHttp);
      service.getHeroes().then(response => {
        expect(response).toEqual(heroes);
      });
    }));

    it('should return a promise to heroes retrieved via HTTP (using async)', fakeAsync(() => {
      const service = new HeroService(mockHttp);
      let actual: Hero[];
      service.getHeroes().then(response => actual = response);
      tick();
      expect(actual).toEqual(heroes);
    }));
  });
});

