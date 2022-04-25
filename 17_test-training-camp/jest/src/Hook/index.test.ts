/**
 * beforeAll --> beforeEach --> afterEach --> afterAll
 */

describe('scopeA Outer', () => {
  beforeAll(() => {
    console.log('beforeAll.........1');
  });

  afterAll(() => {
    console.log('afterAll.........1');
  });

  beforeEach(() => {
    console.log('beforeEach.........1');
  });

  afterEach(() => {
    console.log('afterEach.........1');
  });
  test('test1', () => {
    expect('chou').toBe('chou');
  });
  describe('scopeA Inner', () => {
    beforeAll(() => {
      console.log('beforeAll.........2');
    });

    afterAll(() => {
      console.log('afterAll.........2');
    });

    beforeEach(() => {
      console.log('beforeEach.........2');
    });

    afterEach(() => {
      console.log('afterEach.........2');
    });
    test('test1', () => {
      expect('chou').toBe('chou');
    });
  });
});

describe('scopeB', () => {
  test('test1', () => {
    expect('chou').toBe('chou');
  });
});
