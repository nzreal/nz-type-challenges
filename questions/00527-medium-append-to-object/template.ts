import type { Alike } from '@type-challenges/utils'

export type AppendToObject<T extends Record<string, any>, U extends string, V> =
  {
    [K in (keyof T | U)]: K extends U ? V: T[K]
  }

type AppendToObject1<T extends Record<string, any>, U extends string, V> = T & Record<U, V>

type test527 = AppendToObject<{ a: 1 }, 'b', boolean>

type test527_1 = Alike<AppendToObject1<{ a: 1 }, 'b', boolean>, {
  b: boolean
  a: 1
}>
