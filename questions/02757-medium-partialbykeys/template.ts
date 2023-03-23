type Flatten1<T> = T extends T ? {
  [K in keyof T]: T[K]
} : never

type PartialByKeys<T, K extends keyof T = keyof T> = Flatten1<
    Omit<T, K> & { [FK in K]?: T[FK] }
>

type test02757 = PartialByKeys<{
  a: number
  b: string
  c: {
    c1: number
  }
}, 'a'>
