import { join } from './joiner';

describe('join', () => {

  it('should return a string with each array item joined by the separator', () => {
    const joined = join([1, 2, 3], '-');
    expect(joined).toEqual('1-2-3');
  });

  it('should return an empty string if array is empty', () => {
    const joined = join([], '-');
    expect(joined).toEqual('');
  });

  it('should join with a comma if no separator is provided', () => {
    const joined = join([1, 2, 3]);
    expect(joined).toEqual('1,2,3');
  });

  it('should work with an empty string separator', () => {
    const joined = join([1, 2, 3], '');
    expect(joined).toEqual('123');
  });

  it('should error when not passed an array', () => {
    const badArg: any = {};
    expect(() => join(badArg, '')).toThrowError();
  });
});
