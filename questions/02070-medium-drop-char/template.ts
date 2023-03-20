type DropChar<S, C> = S extends `${infer F}${infer R}` ?
  F extends C ? DropChar<R, C> : `${F}${DropChar<R, C>}`
  : S

type test_02070 = DropChar<'butter fly!', ''>
