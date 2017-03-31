import { Hero } from 'app/shared/hero';

export class MockHeroService {
  constructor(private heroes: Hero[]) {}
  getHeroes() {
    return Promise.resolve(this.heroes);
  }
}
