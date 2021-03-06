/* eslint-disable no-extend-native */
import * as ArrayUtils from './array'

export {}

declare global {
  interface Array<T> {
    zipShortest<U>(xs: U[]): [T, U][];
    zipShortest(...xss: T[][]): T[][];

    zip<U>(xs: U[]): [T, U][];
    zip(...xss: T[][]): T[][];

    mapFilter<R>(fn: (value:  T, index: number) => R | null | undefined): R[];

    count(elem: T): number;

    combinations(k: 2): [T, T][];
    combinations(k: 3): [T, T, T][];
    combinations(k: number): T[][];

    fold(fn: (acc: T, value: T, index: number) => T): T[];
    fold<R>(fn: (acc: R, value: T, index: number) => R, init: R): R[];
  }
}

// @ts-ignore
Array.prototype.zipShortest = function (...xss: any) {
  // @ts-ignore
  return ArrayUtils.zipShortest(this, ...xss)
}

// @ts-ignore
Array.prototype.zip = function (...xss: any) {
  // @ts-ignore
  return ArrayUtils.zip(this, ...xss)
}

Array.prototype.mapFilter = function (fn) {
  return ArrayUtils.mapFilter(this, fn)
}

Array.prototype.count = function<T> (this: Array<T>, elem: T): number {
  let cnt = 0
  for (const x of this)
    if (x === elem) ++cnt
  return cnt
}

// @ts-ignore
Array.prototype.combinations = function (k: number) {
  // @ts-ignore
  return ArrayUtils.combinations(this, k)
}

Array.prototype.fold = function (fn: any, init?: any) {
  return ArrayUtils.fold(this, fn, init)
}
