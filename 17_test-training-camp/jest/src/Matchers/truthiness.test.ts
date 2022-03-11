describe('truthiness matchers', () => {
  test('toBeNull', () => {
    expect(null).toBeNull();
  });
  test('toEqual', () => {
    expect('chou').toBeDefined();
  });
  test('toBeUndefined', () => {
    expect(undefined).toBeUndefined();
  });
  test('toBeTruthy', () => {
    expect(1).toBeTruthy();
  });
  test('toBeFalsy', () => {
    expect(0).toBeFalsy();
  });
});
