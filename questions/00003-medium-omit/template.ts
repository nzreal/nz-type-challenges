type MyOmit1<T extends Record<any, any>, K extends keyof T> =
  { [P in MyExclude<keyof T, K>]: T[P] }

type MyOmit2<T extends Record<any, any>, K extends keyof T> =
  MyPick<T, MyExclude<keyof T, K>>

/**
 * T: { a: string; b: number; }; K: 'b'
 *
 * P as ('a' | 'b' extends 'b'? never: 'a' | 'b')
 * P as (('a' extends 'b'? never: 'a') | ('b' extends 'b'? never: 'b'))
 * P as ('a' | never)
 * P as 'a'
 *
 * 可见 as 执行优先级较低
 */
type MyOmit3<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
}

type MyOmit<T extends Record<any, any>, K extends keyof T> =
  MyPick<T, { [P in keyof T]: P extends K? never: P }[keyof T]>

type test2 = MyOmit<{ a: 1; b: string }, 'b'>

// js implement
function JsOmit(target: Record<string, any>, keys: string[]) {
  const res: Record<string, any> = {}

  Object.keys(target).filter(key => !keys.includes(key)).forEach((filteredKey) => {
    res[filteredKey] = target[filteredKey]
  })

  return res
}
