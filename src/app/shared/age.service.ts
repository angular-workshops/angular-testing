export class AgeService {
  describe(age: number): string {
    if (age < 18) { return 'kid'; }
    if (age < 40) { return 'prime'; }
    if (age < 60) { return 'experienced'; }
    return 'over the hill!';
  }
}
