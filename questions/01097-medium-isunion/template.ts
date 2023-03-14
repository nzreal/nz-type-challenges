type isNever<T> = [T] extends [never] ? true : false

// TODO: never extends never = never ?

/**
 * 首先判断是否 never，为 never 时会直接 return never
 *
 * 通过 I extends I 进行联合类型分配，分别是 'a' extends 'a' / 'b' extends 'b' / 'c' extends 'c'
 *
 * 而联合类型在条件判断的右侧出现则不会有这个机制，于是 [T] extends [I] 就变成了 ['a' | 'b' | 'c'] extends ['a']
 *
 * @see https://github.com/type-challenges/type-challenges/issues/24885
 */
type IsUnion<I, T = I> = isNever<I> extends true ? false : I extends I ? [T] extends [I] ? false : true : never

type test_01097 = IsUnion<string | number>

type test_01097_1 = IsUnion<never>
