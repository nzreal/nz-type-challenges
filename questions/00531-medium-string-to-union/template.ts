type StringToUnion<T extends string> = T extends `${infer C}${infer A}` ?
  C | StringToUnion<A>: never
