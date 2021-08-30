/**
 * 用于遍历目标类型的公开属性名
 */

enum Letter {
  A = 'A',
  B = 'B',
  C = 'C',
}

type LetterMap = {
  [key in Letter]: string;
};
