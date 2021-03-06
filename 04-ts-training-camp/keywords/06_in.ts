/**
 * eg1
 */

enum Letter {
  A = 'a',
  B = 'b',
  C = 'c',
}

type LetterMap = {
  [key in Letter]: string;
};

// 等价于
type _LetterMap = {
  a: string;
  b: string;
  c: string;
};

/**
 * eg2
 */
type Keys = 'name' | 'sex';

type PersonMap = {
  [key in Keys]: string;
};

// 等价于
type _PersonMap = {
  name: string;
  sex: string;
};

const a = {
  A: 'a',
  B: 'b',
  C: 'c',
};
