// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#type-inference-in-conditional-types

/**
 * 分配
 *
 * 'a' | 'b' =>
 *
 * ((x: 'a') => any) | ((x: 'b') => any)
 */
type UnionToFunction<U> = U extends U ? (x: U) => any : never

/**
 * https://github.com/type-challenges/type-challenges/issues/122#issuecomment-724527818
 *
 * 通过函数参数的逆变，infer T 要想满足 ((x: 'a') => any) extends (x: infer T) => any，b 也可以
 *
 * T 只能是 'a' & 'b'
 *
 * (((x: 'a') => any) | ((x: 'b') => any)) extends (x: infer T) => any
 */
type UnionToIntersection<U> = UnionToFunction<U> extends ((x: infer T) => any) ? T : never

/**
 * practice area
 */
type f1 = (x: 'a') => any
type f2 = (x: 'b') => any

/**
 * 协变：子类型 -> 父类型
 *
 * 协变指能够使用比原始指定的派生类型的派生程度更大（更具体的）的类型
 *
 * 逆变指能够使用比原始指定的派生类型的派生程度更小（不太具体的）的类型
 * https://learn.microsoft.com/zh-cn/dotnet/standard/generics/covariance-and-contravariance?redirectedfrom=MSDN
 * 如下方
 */
interface A {
  a: 1
}

interface B extends A {
  b: 1
}

function test01(x: A) {}

const b111: B = { a: 1, b: 1 }

test01(b111)

/**
 * 逆变：父 -> 子
 */
// 函数参数逆变
type test_55 = f1 | f2 extends (x: 'a' & 'b') => any ? true : false

type test_55_1 = ((x: 'a') => any) extends ((x: 'a' & 'b') => any) ? true : false
