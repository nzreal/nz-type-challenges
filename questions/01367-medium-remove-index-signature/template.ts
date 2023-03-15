type RemoveIndexSignatureInUnion<T> = T extends string ? never : T

// TODO: 为何 P 不能直接为 PropertyKey
type RemoveIndexSignature<T, P = PropertyKey> = {
  [
  K in keyof T as
  /**
   * 因为 K 是 literal 类型 如 'foo'，为 PropertyKey 的子集
   *
   * 因此 P 无法赋值给 K，但 K 可以赋值给 P，以此筛掉 PropertyKey
   */
  P extends K // excludes symbol and number
    ? never
    : K extends P ? K : never
  ]: T[K]
}

type Test01367 = {
  foo(): void
  [key: string]: any
  [key: number]: any
}

type test_01367 = RemoveIndexSignature<Test01367>

type Zhankai<T> = T extends T ? T : never

type test_01367_1 = Zhankai<keyof Test01367>
