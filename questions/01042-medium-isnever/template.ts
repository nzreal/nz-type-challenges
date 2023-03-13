import type { Equal } from '@type-challenges/utils'

export type IsNever1<T> = Equal<T, never> extends true ? true : false

// TODO: https://github.com/type-challenges/type-challenges/issues/22791
// so, `never` can not extend `never`,
// but, a tuple containing only never (`[never]`)
// can extend another tuple (again containing never)
export type IsNever<T> = T extends never ? true : false

type test_1042 = IsNever<never>
