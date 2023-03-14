// 替换单对象
type ReplaceObjKey<O extends Record<string, unknown>, K, V> = {
  [OK in keyof O]: OK extends K ? V : O[OK]
}

// type ReplaceKeys<U extends Record<string, unknown>, T, Y> =
//     U extends U ?
//     //   T extends keyof U ?
//       T extends keyof Y ? ReplaceObjKey<U, T, Y[T]> : ReplaceObjKey<U, T, never>
//     // : U
//       : never

type Nodes = { name: string; flag: boolean } | {
  // eslint-disable-next-line @typescript-eslint/member-delimiter-style
  name: string; no: number
}

type ReplaceKeys<T extends Record<string, unknown>, U, V> = T extends T ? {
  [K in keyof T]: K extends U
    ? K extends keyof V
      ? V[K]
      : never
    : T[K]
} : never

type test_01130 = ReplaceObjKey<{ a: 1 }, 'a', { a: 2 }>

type test_01130_1 = ReplaceKeys<Nodes, 'name' | 'flag', { name: 1 }>
