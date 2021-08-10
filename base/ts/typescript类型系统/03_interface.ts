/**
 * 无法声明基本数据类型 只能声明对象
 *
 *
 *
 * 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用const，若做为属性则使用readonly
 */

interface IProps {
  name: string;
  height?: number;
  readonly age: number;
}
