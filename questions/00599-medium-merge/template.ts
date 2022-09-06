type Merge<F extends Record<string, any>, S extends Record<string, any>> =
  { [K in keyof (F & S)]: K extends keyof F ?
    K extends keyof S ? S[K]: F[K]
    : K extends keyof S ? S[K]: never
  }
