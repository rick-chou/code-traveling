import { Point } from './type'

/**
 * @param x x轴
 */
export interface IPoint {
  /** x轴 */
  x: number
  y: number
}

export interface SetPoint {
  (x: number, y: number): void
}

// 扩展
export interface IPointX extends IPoint {
  z: number
}

export interface IPointXX extends Point {
  z: number
}

export interface IPoint {
  z: number
}

export const point: IPoint = {
  x: 2,
  y: 0,
  z: 9,
}

export const pointx: IPointX = {
  x: 2,
  y: 0,
  z: 9,
}

export const pointxx: IPointXX = {
  x: 2,
  y: 0,
  z: 9,
}

// 声明基本类型 (无法声明基本数据类型 只能声明对象)

// export interface IStr:string
