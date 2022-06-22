// 骚操作，接收泛型 T，再重组 readonly [...T]
declare function PromiseAll<T extends any[]>(values: readonly [...T]):
Promise<{ [K in keyof T]: T[K] extends Promise<infer R>? R: T[K] }>

const ins20child = new Promise<string>(resolve => resolve('hh'))
const ins20child1 = Promise.resolve(Symbol(111))

const ins20 = PromiseAll([123, ins20child, ins20child1])
