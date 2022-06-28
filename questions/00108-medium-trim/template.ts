type EmptyStr = ' ' | '\n' | '\t'

type Trim<S extends string> =
  S extends `${EmptyStr}${infer L}`?
    Trim<L>:
    S extends `${infer R}${EmptyStr}`? Trim<R>: S

type res108 = Trim<'   \n\t foo bar \t'>
