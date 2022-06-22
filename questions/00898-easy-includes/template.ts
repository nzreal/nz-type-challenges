import type { Equal } from '@type-challenges/utils'

export type Includes<T extends readonly any[], U> = T extends [
  infer F,
  ...infer R,
]
  ? Equal<F, U> extends true
    ? true
    : Includes<R, U>
  : false

type Includes2<T extends readonly any[], U> = {
  [K in keyof T]: Equal<T[K], U>
}[number] extends false
  ? false
  : true
