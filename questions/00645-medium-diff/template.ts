type GetDiffedKeys<O, O1> = { [K in keyof O]: K extends keyof O1? never: K }[keyof O] | { [K in keyof O1]: K extends keyof O? never: K }[keyof O1]

type Diff<O, O1> = GetDiffedKeys<O, O1> extends (keyof O | keyof O1) ? Pick<O&O1, GetDiffedKeys<O, O1>> :never

type test645 = Diff<{ a: number; b: number }, { b: number; c: number }>
