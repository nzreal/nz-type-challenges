type MyReadonly3<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P]
} & {
  [P in MyExclude<keyof T, K>]: T[P]
}

type MyReadonly2<T, K extends keyof T = keyof T> =
  MyOmit<T, K> & { readonly [P in K]: T[P] }

type ar = MyReadonly2<{ a: null; b: undefined }, 'a'>
