type MyExclude<T, U> = T extends U ? never : T

type test = MyExclude<'a' | 'b' | 'c', 'a' | 'b'>

// equal to MyExclude<'a', 'a' | 'b'> | MyExclude<'b', 'a' | 'b'> | MyExclude<'c', 'a' | 'b'>
// never 被认为是空的联合类型 因此 never | never | 'c' -> 'c'

/**
 * When conditional types act on a generic type, they become distributive when given a union type
 *
 * https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
 *
 * 对于使用 extends 关键字的条件类型（即上面的三元表达式类型）
 * 如果 extends 前面的参数是一个泛型类型，当传入该参数的是联合类型，则使用分配律计算最终的结果
 * 分配律是指，将联合类型的联合项拆成单项，分别代入条件类型，然后将每个单项代入得到的结果再联合起来，得到最终的判断结果
 *
 * 若不想要获得联合类型则使用诸如以下的方法
 */

type MyExclude1<T, U> = [T] extends [U] ? never : T

type test1 = MyExclude1<'a' | 'b' | 'c', 'a' | 'b'>
