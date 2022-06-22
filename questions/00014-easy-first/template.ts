type First<T extends readonly (any)[]> = T extends [] ? never : T[0]
type First2<T extends readonly (any)[]> = T['length'] extends 0 ? never : T[0]
type First3<T extends readonly (any)[]> = T[0] extends T[number] ? T[0] : never
type First4<T extends readonly (any)[]> = T extends [infer F, ...infer Rest] ? F : never

// 如果 extends 前面的类型能够赋值给 extends 后面的类型，那么表达式判断为真，否则为假

type arr = [3, 2, 1]

type r = First4<[3]>

// 空数组类型 type EmptyArr = []
// EmptyArr[number] = never 及其永远不会有子元素
// EmptyArr[0] = undefined ???
// EmptyArr['length'] = 0 可以直接推断

type P<T> = T extends 'x' ? string : number

type res = P<never>

type res1 = never extends 'x' ? string : number

// 重载的意义在于对于给不同类型的传参一一对应不同类型的返参
function testOverload(module: { module: string }): void
function testOverload(module: string): string
function testOverload(params: string | { module: string }): void | string {
  let module
  if (typeof params === 'object')
    module = params.module
  else if (typeof params === 'number')
    module = String(params)
  else
    module = params
}

const test = testOverload({ module: '123' })

const xxx: unknown = 1
