import { Hero } from './hero';
import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      {id: 11, name: 'Mr. Nice', strength: 10, age: 15},
      {id: 12, name: 'Narco', strength: 5, age: 20},
      {id: 13, name: 'Bombasto', strength: 8, age: 23},
      {id: 14, name: 'Celeritas', strength: 15, age: 30},
      {id: 15, name: 'Magneta', strength: 2, age: 34},
      {id: 16, name: 'RubberMan', strength: 50, age: 40},
      {id: 17, name: 'Dynama', strength: 43, age: 45},
      {id: 18, name: 'Dr IQ', strength: 4, age: 58},
      {id: 19, name: 'Magma', strength: 18, age: 65},
      {id: 20, name: 'Tornado', strength: 1000, age: 80}
    ];
    return {heroes};
  }
}
