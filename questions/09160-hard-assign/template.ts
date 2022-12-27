type MergeObject<O extends Record<string, unknown>, O1 extends Record<string, unknown>> =
  { [K in (keyof O | keyof O1)]: K extends keyof O1 ? O1[K]: K extends keyof O ? O[K]: never }

type Assign<T extends Record<string, unknown>, U extends any[], Result extends Record<string, any> = T> =
U extends [infer R, ...infer J]
  ? R extends Record<string, unknown> ? Assign<T, J, MergeObject<Result, R>>: Assign<T, J, Result>
  :
  Result
