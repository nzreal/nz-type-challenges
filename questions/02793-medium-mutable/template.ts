type Mutable<T extends Record<PropertyKey, unknown> | readonly unknown[]> = {
  -readonly[K in keyof T]: T[K]
}
