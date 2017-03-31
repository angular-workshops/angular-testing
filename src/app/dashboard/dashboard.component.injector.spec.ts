import { ReflectiveInjector } from '@angular/core';
import { fakeAsync, tick } from '@angular/core/testing';
import { HeroService } from 'app/shared/hero.service';
import { Hero } from 'app/shared/hero';
import { DashboardComponent } from './dashboard.component';

describe('HeroService', () => {
  let injector: ReflectiveInjector;
  let heroes: Hero[];

  beforeEach(() => {
    heroes = [ {id: 2, name: 'Rubberman'}, {id: 4, name: 'Dynama'} ];
    injector = ReflectiveInjector.resolveAndCreate([ ]);
  });

  describe('heroes', () => {
    it('should contain just the first three heroes after ngOnInit');
  });
});
