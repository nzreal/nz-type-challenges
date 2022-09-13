// upperCase -> lowerCase

import type { Equal } from '@type-challenges/utils'

// `${UPPERCASE}${lowerCase}` -> `${UPPERCASE}-${lowerCase}`
type isLowerCase<S extends string> = Equal<S, Lowercase<S>>

type test612 = isLowerCase<'-'>

// Lowercase 只能单个字母判断
export type KebabCase1<S extends string, IsRecursive = false> = S extends `${infer C}${infer R}` ?
  isLowerCase<C> extends false ? `${IsRecursive extends true ? '-': ''}${Lowercase<C>}${KebabCase1<R, true>}`: `${C}${KebabCase1<R, true>}`
  : S

// Uncapitalize 可以 rest 一起判断
export type KebabCase<S extends string> = S extends `${infer C}${infer R}`?
  R extends Uncapitalize<R> ?
    `${Uncapitalize<C>}${KebabCase<R>}`:
    `${Uncapitalize<C>}-${KebabCase<R>}`
  : S

type test612_1 = Uncapitalize<'Foo-Bar'>
