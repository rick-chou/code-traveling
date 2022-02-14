export type A = 'name' | 'sex';

type B = Record<A, string>;

export type C = string;

type D = Record<C, string>;
