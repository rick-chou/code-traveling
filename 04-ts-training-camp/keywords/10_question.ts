/**
 * QA: 提取value的联合类型
 * input  --> T
 * output --> 'foo' | 'bar
 */

const T = [
  { id: 1, value: 'foo' },
  { id: 2, value: 2 },
];

type getPropertyTypeOfArrayObject<
  T extends unknown,
  K extends string
> = T extends Array<{ [k in K]: infer R }> ? R : never;

type V = getPropertyTypeOfArrayObject<typeof T, 'value'>;
