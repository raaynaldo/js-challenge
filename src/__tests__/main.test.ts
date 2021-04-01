import { add } from '../main';

describe('add', () => {
  it('should return 2 when given 1 and 1', () => {
    expect(add(1, 1)).toBe(2);
  });
});
