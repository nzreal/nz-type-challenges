type SignParser<T> = T extends `${infer S}${infer R}` ?
  S extends '+' | '-' ? S : ''
  : ''

type PercentParser<T> = T extends `${string}%` ? '%' : ''

type NumberParser<T> = T extends `${SignParser<T>}${infer N}${PercentParser<T>}` ? N : ''

type PercentageParser<A extends string> = [SignParser<A>, NumberParser<A>, PercentParser<A>]

function percentageParser(str: string, res: string[] = [], tempNum?: string) {

}
