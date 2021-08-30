/**
 * Make all properties in T optional
 */
type _Partial<T> = {
  [P in keyof T]?: T[P];
};

/**
 * Make all properties in T required
 */
type _Required<T> = {
  [P in keyof T]-?: T[P];
};

/**
 * Make all properties in T readonly
 */
type _Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

/**
 * From T, pick a set of properties whose keys are in the union K
 */
type _Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/**
 * Construct a type with a set of properties K of type T
 */
type _Record<K extends keyof any, T> = {
  [P in K]: T;
};

/**
 * Exclude from T those types that are assignable to U
 */
type _Exclude<T, U> = T extends U ? never : T;

/**
 * Extract from T those types that are assignable to U
 */
type _Extract<T, U> = T extends U ? T : never;

/**
 * Construct a type with the properties of T except for those in type K.
 */
type _Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/**
 * Exclude null and undefined from T
 */
type _NonNullable<T> = T extends null | undefined ? never : T;

/**
 * Obtain the parameters of a function type in a tuple
 */
type _Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

/**
 * Obtain the parameters of a constructor function type in a tuple
 */
type _ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (
  ...args: infer P
) => any
  ? P
  : never;

/**
 * Obtain the return type of a function type
 */
type _ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

/**
 * Obtain the return type of a constructor function type
 */
type _InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (
  ...args: any
) => infer R
  ? R
  : any;
