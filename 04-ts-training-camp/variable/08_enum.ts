/**
 * 默认情况下，从0开始为元素编号
 * 也可以手动为某个枚举值赋值 下一个枚举值为前一个枚举值 + 1
 */

enum Color {
  Red,
  Green,
  Blue,
}

Color.Blue; // -->2

enum Count {
  one = 1,
  two,
  three,
}

Count.three; // --> 3

// 减少魔法数字
enum STATUS {
  READY = 0,
  OK = 1,
  FAILED = -1,
}

// 字符串枚举
enum Lang {
  js = 'javascript',
  ts = 'typescript',
  jsx = 'react',
  py = 'python',
}

/*
('use strict');

var Color;

(function (Color) {
  Color[(Color['Red'] = 0)] = 'Red';
  Color[(Color['Green'] = 1)] = 'Green';
  Color[(Color['Blue'] = 2)] = 'Blue';
})(Color || (Color = {}));

var Count;

(function (Count) {
  Count[(Count['one'] = 1)] = 'one';
  Count[(Count['two'] = 2)] = 'two';
  Count[(Count['three'] = 3)] = 'three';
})(Count || (Count = {}));

var Lang;

(function (Lang) {
  Lang['js'] = 'javascript';
  Lang['ts'] = 'typescript';
  Lang['jsx'] = 'react';
  Lang['py'] = 'python';
})(Lang || (Lang = {}));
*/
