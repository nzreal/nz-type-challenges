type Last1<T extends any[]> = T extends [...infer P, infer R]? R: never
// [...arr.unshift(any)][arr.length]
type Last2<T extends any[]> = [unknown, ...T][T['length']]
// arr.pop().length
type Last<T extends any[]> = T[(T extends [...infer P, infer L]? P: never)['length']]

type test15 = Last<[1, 2, 4]>
