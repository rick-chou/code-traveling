const fnWithError = () => {
  throw new Error('oops');
};

describe('exceptions matchers', () => {
  test('toContain', () => {
    expect(fnWithError).toThrowError();
  });
});
