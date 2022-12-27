type FalsyArray = [false, 0, '', [], {}]

// TODO: 为什么调换 C、T 就不行了
type isTruthy<T, F = FalsyArray> = F extends [infer C, ...infer R] ?
  C extends T ? false: isTruthy<T, R>: true

type AnyOf<T extends readonly any[]> = T extends [infer C, ...infer R]?
  isTruthy<C> extends true? true: AnyOf<R> : false

type test_949 = isTruthy<1>
