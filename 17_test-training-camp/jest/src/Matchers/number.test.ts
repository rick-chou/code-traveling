describe('number matchers', () => {
  // 大于
  test('toBeGreaterThan', () => {
    expect(2).toBeGreaterThan(1);
  });
  // 小于
  test('toEqual', () => {
    expect(2).toBeLessThan(3);
  });
  // 大于等于
  test('toBeGreaterThanOrEqual', () => {
    expect(3).toBeGreaterThanOrEqual(3);
  });
  // 小于等于
  test('toBeLessThanOrEqual', () => {
    expect(3).toBeLessThanOrEqual(3);
  });
  // test('toBe float', () => {
  //   expect(0.1 + 0.2).toBe(0.3);
  // });
  test('toBeCloseTo', () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3);
  });
});
