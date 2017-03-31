import { ReflectiveInjector } from '@angular/core';
import { fakeAsync, tick } from '@angular/core/testing';
import { Http, ConnectionBackend, RequestOptions, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HeroService } from './hero.service';
import { Hero } from './hero';

describe('HeroService', () => {
  let injector: ReflectiveInjector;
  let service: HeroService;
  let backend: MockBackend;

  beforeEach(() => {
    injector = ReflectiveInjector.resolveAndCreate([
      {provide: ConnectionBackend, useClass: MockBackend},
      {provide: RequestOptions, useClass: BaseRequestOptions},
      Http,
      HeroService,
    ]);
    service = injector.get(HeroService);
    backend = injector.get(ConnectionBackend);
  });

  describe('getHeroes', () => {
    it('should return a promise to heroes retrieved via HTTP (using done)', fakeAsync(() => {
      const expectedHeroes = [ {id: 2, name: 'Rubberman'}, {id: 4, name: 'Dynama'} ];
      let actualHeroes: Hero[];
      service.getHeroes().then(response => actualHeroes = response);
      expect(backend.connectionsArray[0].request.url).toEqual('api/heroes');
      backend.connectionsArray[0].mockRespond(new Response(new ResponseOptions({
         body: JSON.stringify({data: expectedHeroes}),
      })));
      tick();
      expect(actualHeroes).toEqual(expectedHeroes);
    }));
  });
});