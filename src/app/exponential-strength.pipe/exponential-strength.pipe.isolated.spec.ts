import { ExponentialStrengthPipe } from './exponential-strength.pipe';

describe('ExponentialStrengthPipe', () => {
  let pipe: ExponentialStrengthPipe;
  beforeEach(() => {
    pipe = new ExponentialStrengthPipe();
  });

  it('should raise the value to the power of the exponent parameter', () => {
    expect(pipe.transform(5, '2')).toEqual(25);
  });

  it('should use "1" for the exponent if not provided', () => {
    expect(pipe.transform(5, undefined)).toEqual(5);
  });
});
