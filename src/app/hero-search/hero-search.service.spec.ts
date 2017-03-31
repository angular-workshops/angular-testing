import { ReflectiveInjector } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { of as observableOf } from 'rxjs/observable/of';
import { Hero } from 'app/shared/hero';
import { HeroSearchService } from './hero-search.service';

class MockHttp {
  get() {
    // return a response object
  }
}

describe('HeroSearchService', () => {

  let injector: ReflectiveInjector;
  let mockHttp: MockHttp;
  let searchService: HeroSearchService;
  let heroes: Hero[];

  beforeEach(() => {
    heroes = [ {id: 2, name: 'Rubberman'}, {id: 4, name: 'Dynama'} ];
    injector = ReflectiveInjector.resolveAndCreate([
      { provide: Http, useClass: MockHttp },
      HeroSearchService,
    ]);
    mockHttp = injector.get(Http);
    searchService = injector.get(HeroSearchService);
  });

  it('should map the response to an array of Heroes');
  it('should make a HTTP request to `app/heroes`');
});
