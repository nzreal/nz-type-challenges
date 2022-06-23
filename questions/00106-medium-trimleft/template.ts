// https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
// amazing
type TrimLeft1<S extends string> =
S extends ` ${infer K}`?
  TrimLeft1<K>:
    (S extends `\n\t${infer R}`? TrimLeft1<R>: S)

type TrimLeft<S extends string> = S extends `${' ' | '\n\t'}${infer K}`? TrimLeft<K>: S

type test106 = TrimLeft<'   \n\t foo bar '>

// js implement
function jsTrimLeft(s: string) {
  const a = ('123  3' as const).split('')
}
