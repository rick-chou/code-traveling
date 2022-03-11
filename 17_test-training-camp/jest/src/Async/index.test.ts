describe('async', () => {
  const fnCb = (cb: (n: number) => void) => {
    setTimeout(() => {
      cb && cb(1);
    }, 1000);
  };

  test('callback', (done) => {
    const cb = (n: number) => {
      expect(n).toBe(1);
      done();
    };
    fnCb(cb);
  });

  test('promise', () => {
    const fnPromise = () => {
      return Promise.resolve(1);
    };
    // .resolves / .rejects
    // return expect(fnPromise()).resolves.toBe(1);
    return fnPromise().then((res) => expect(res).toBe(1));
  });

  test('await', async () => {
    const fnAsync = () => {
      return Promise.resolve(1);
    };
    const res = await fnAsync();
    expect(res).toBe(1);
  });
});
