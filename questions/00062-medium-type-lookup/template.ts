type LookUp1<U extends { type: string }, T> = U extends U & { type: T } ? U: never

type LookUp2<U extends { type: string }, T> =
// U extends U 先触发条件类型分配，联合类型中的各个子类
U extends U ?
  T extends U['type']? U: never
  : never

// infer
type LookUp<U extends { type: string }, T> =
U extends { type: infer P } ?
  P extends T? U: never
  : never

type test62 = LookUp<{ type: 'dog'; breeds: string } | { type: 'cat' }, 'dog'>

type test62_1 = 'dog' extends ({ type: 'dog' } | { type: 'cat' })['type']? true: false
