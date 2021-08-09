import { IPoint } from './02_interface'

export type Point = {
  x: number
  y: number
}

export type SetPoint = {
  (x: number, y: number): void
}

// 扩展
export type PointX = Point & {
  z: number
}

export type PointXX = IPoint & {
  z: number
}

export const point: Point = {
  x: 2,
  y: 9,
}

export const pointx: PointX = {
  x: 2,
  y: 0,
  z: 9,
}

export const pointxx: PointXX = {
  x: 2,
  y: 0,
  z: 9,
}

// 声明基本数据类型

export type Str = string

export const str: Str = 'hello'
