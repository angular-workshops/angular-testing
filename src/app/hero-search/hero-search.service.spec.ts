import { ReflectiveInjector } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { of as observableOf } from 'rxjs/observable/of';
import { Hero } from 'app/shared/hero';
import { HeroSearchService } from './hero-search.service';

class MockHttp {
  constructor(private heroes: Hero[]) {}
  get() {
    return observableOf({ json: () => ({ data: this.heroes}) });
  }
}

describe('HeroSearchService', () => {

  let injector: ReflectiveInjector;
  let mockHttp: MockHttp;
  let searchService: HeroSearchService;
  let heroes: Hero[];

  beforeEach(() => {
    heroes = [
      {id: 11, name: 'Mr. Nice', strength: 10, age: 15},
      {id: 12, name: 'Narco', strength: 5, age: 20},
      {id: 13, name: 'Bombasto', strength: 8, age: 23},
      {id: 14, name: 'Celeritas', strength: 15, age: 30},
    ];
    injector = ReflectiveInjector.resolveAndCreate([
      { provide: Http, useFactory: () => new MockHttp(heroes) },
      HeroSearchService,
    ]);
    mockHttp = injector.get(Http);
    searchService = injector.get(HeroSearchService);
  });

  it('should map the response to an array of Heroes', () => {
    let actual: Hero[];
    searchService.search('some query').subscribe(results => actual = results);
    expect(actual).toEqual(heroes);
  });

  it('should make a HTTP request to `app/heroes`', () => {
    spyOn(mockHttp, 'get').and.callThrough();
    searchService.search('some query').subscribe();
    expect(mockHttp.get).toHaveBeenCalledWith('app/heroes/?name=some query');
  });
});
