describe('string matchers', () => {
  test('toMatch', () => {
    expect('chou').toMatch(/c/);
  });
  test('toEqual', () => {
    expect('chou').not.toMatch(/K/);
  });
});
