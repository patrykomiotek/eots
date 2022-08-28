import { sum } from './sum';

describe('Sum function', () => {
  it('should add two values', () => {
    const result = sum(2, 2);
    expect(result).toBe(4);
  });
});
