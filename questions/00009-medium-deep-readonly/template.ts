import type { Equal } from '@type-challenges/utils'

type IfObjectOrArray<T> = keyof T extends never ? false: true

type IfObjectOrArray2<T> = T extends Record<any, unknown> | unknown[] ? true: false

// 先判断是否数组、obj
export type DeepReadonly<T> = IfObjectOrArray2<T> extends true ?
    { readonly [K in keyof T]: DeepReadonly<T[K]> }: T

//
export type DeepReadonly2<T> =
  { readonly [K in keyof T]:
    IfObjectOrArray<T[K]> extends true ? DeepReadonly<T[K]>: T[K]
  }
// TODO: why DeepReadonly2<symbol> = symbol DeepReadonly2<number> = number

type deepReadonlyTest1 = DeepReadonly<{
  a: number
  b: {
    c: number
    arr: [{ s: string }]
  }
  c: symbol
}>

type arss = { readonly [K in keyof symbol]: IfObjectOrArray<symbol[K]> extends true? Readonly<symbol[K]>: symbol[K] }
type sres = Equal<arss, symbol>
type syy = DeepReadonly2<'123'>
type absc = { [K in keyof number]: number[K] }
