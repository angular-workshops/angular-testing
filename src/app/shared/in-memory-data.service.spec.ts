import { InMemoryDataService } from './in-memory-data.service';
import { Hero } from './hero';

describe('InMemoryDataService', () => {
  describe('createDb', () => {
    it('should return a collection of hero objects', () => {
      const service = new InMemoryDataService();
      const db = service.createDb();
      db.heroes.forEach((hero) => {
        expect(hero.name).toEqual(jasmine.any(String));
        expect(hero.id).toEqual(jasmine.any(Number));
      });
    });
  });
});
