type Pop1<T extends any[]> = T extends [...infer P, unknown]? P: never

// type Pop2<T extends any[]> = {
//   [K in keyof T extends Pop<T>['length']? K: never]: T[K]
// }

type Pop<T extends any[]> = T extends [...infer P, unknown]? P: never

type test16 = Pop1<[]>
