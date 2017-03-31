import { ReflectiveInjector } from '@angular/core';
import { fakeAsync, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/observable';
import { of as observableOf } from 'rxjs/observable/of';
import { Hero } from 'app/shared/hero';
import { HeroSearchService } from './hero-search.service';
import { HeroSearchComponent } from './hero-search.component';

class MockHeroSearchService {
  heroes: Hero[];
  search(term: string): Observable<Hero[]> {
    return observableOf(this.heroes);
  }
}

describe('HeroSearchService', () => {
  let injector: ReflectiveInjector;
  let component: HeroSearchComponent;
  let searchService: MockHeroSearchService;
  let heroes: Hero[];

  beforeEach(() => {
    heroes = [ {id: 2, name: 'Rubberman'}, {id: 4, name: 'Dynama'} ];
    injector = ReflectiveInjector.resolveAndCreate([
      { provide: HeroSearchService, useClass: MockHeroSearchService },
      { provide: Router, useValue: {}},
      HeroSearchComponent,
    ]);
    component = injector.get(HeroSearchComponent);
    searchService = injector.get(HeroSearchService);
  });

  describe('search', () => {
    let currentHeroes: Hero[];

    beforeEach(() => {
      component.ngOnInit();
      component.heroes.subscribe(h => currentHeroes = h);
    });

    it('should trigger a call to HeroSearchService after 300ms debounce', fakeAsync(() => {
      spyOn(searchService, 'search');
      component.search('abc');
      tick(100);
      expect(searchService.search).not.toHaveBeenCalled();
      component.search('edf');
      tick(200);
      expect(searchService.search).not.toHaveBeenCalled();
      tick(100);
      expect(searchService.search).toHaveBeenCalledWith('edf');
    }));

    it('should not trigger a call to HeroSearchService if the search is empty', fakeAsync(() => {
      spyOn(searchService, 'search');
      component.search('');
      tick(300);
      expect(searchService.search).not.toHaveBeenCalled();
    }));

    it('should emit the search results on the heroes observable', fakeAsync(() => {
      searchService.heroes = heroes;
      component.search('abc');
      tick(300);
      expect(currentHeroes).toEqual(heroes);
    }));

    it('should emit an empty array if the search string is empty', fakeAsync(() => {
      component.search('');
      tick(300);
      expect(currentHeroes).toEqual([]);
    }));
  });
});
