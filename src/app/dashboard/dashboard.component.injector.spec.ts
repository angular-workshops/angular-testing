import { ReflectiveInjector } from '@angular/core';
import { fakeAsync, tick } from '@angular/core/testing';
import { HeroService } from 'app/shared/hero.service';
import { Hero } from 'app/shared/hero';
import { DashboardComponent } from './dashboard.component';

class MockHeroService {
  constructor(private heroes: Hero[]) {}
  getHeroes() {
    return Promise.resolve(this.heroes);
  }
}

describe('HeroService', () => {
  let injector: ReflectiveInjector;
  let heroes: Hero[];

  beforeEach(() => {
    heroes = [
      {id: 11, name: 'Mr. Nice', strength: 10, age: 15},
      {id: 12, name: 'Narco', strength: 5, age: 20},
      {id: 13, name: 'Bombasto', strength: 8, age: 23},
      {id: 14, name: 'Celeritas', strength: 15, age: 30},
      {id: 15, name: 'Magneta', strength: 2, age: 34}
    ];
    injector = ReflectiveInjector.resolveAndCreate([
    ]);
  });

  describe('heroes', () => {
    it('should contain just the first three heroes after ngOnInit');
});
