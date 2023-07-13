/**
 * 联合类型最后一个
 *
 * @description
 *
 * 现将联合转函数联合
 *
 * a | b | c -> (() => a) | (() => b) | (() => c)
 *
 * 再将联合转并集
 *
 * 形成函数重载，函数重载通过 infer 获取值（入参\返参）时会返回最后一个值
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#type-inference-in-conditional-types
 */
type UnionLast<T> = UnionToIntersection<T extends T ? (arg: T) => any : never> extends (x: infer R) => any ? R : never

/**
 * 联合类型 -> tuple
 *
 * 递归并取得联合类型最后一位推入数组
 *
 * @example
 * 'a' | 'b' | 'c' -> ['a', 'b', 'c']
 */
export type UnionToTuple<T> = [T] extends [never]
  ? []
  : [...UnionToTuple<Exclude<T, UnionLast<T>>>, UnionLast<T>]

/**
 * practice area
 */
type a = UnionToTuple<'a' | 'b'>

type interFunc = (() => 'a') & (() => 'b')

type c = interFunc extends () => infer R ? R : never

// 函数重载、infer 取最后的值
declare function a(arg: number): boolean
declare function a(arg: boolean, arg2: string): string

type test_730 = ReturnType<typeof a>
