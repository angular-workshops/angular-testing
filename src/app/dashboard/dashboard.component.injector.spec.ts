import { ReflectiveInjector } from '@angular/core';
import { fakeAsync, tick } from '@angular/core/testing';
import { HeroService } from 'app/shared/hero.service';
import { Hero } from 'app/shared/hero';
import { DashboardComponent } from './dashboard.component';

describe('HeroService', () => {
  let injector: ReflectiveInjector;
  let heroes: Hero[];

  beforeEach(() => {
    heroes = [ {id: 2, name: 'Rubberman', strength: 10, age: 15}, {id: 4, name: 'Dynama', strength: 4, age: 25} ];
    injector = ReflectiveInjector.resolveAndCreate([ ]);
  });

  describe('heroes', () => {
    it('should contain just the first three heroes after ngOnInit');
  });
});
