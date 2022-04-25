describe('common matchers', () => {
  // 值比较
  test('toBe', () => {
    expect(1 + 2).toBe(3);
  });
  // 地址比较
  test('toEqual', () => {
    expect({}).toEqual({});
  });
});
