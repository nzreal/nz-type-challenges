type Permutation<T, U = T> = [T] extends [never] ? []:
  T extends U ? [T, ...Permutation<MyExclude<U, T>>]: []

// Permutation<'a' | 'b' | 'c'>
// 'a' extends 'a' | 'b' | 'c' ? ['a', ...Permutation<'b' | 'c'>] | 'b' ... | 'c' ...
// Permutation<'b' | 'c'> -> ['b', 'c'] | ['c', 'b']
// ['a', ...(['b', 'c'] | ['c', 'b'])] -> ['a', 'b', 'c'] | ['a', 'c', 'b']

type test296 = Permutation<'a' | 'b'>

// TODO: 也是种规律，...扩展符中有 | 时会打平至扩展对象那层
type test296_1 = ['a', ...(['b', 'c'] | ['c', 'b'])] // ["a", "b", "c"] | ["a", "c", "b"]

type Foo = {
  a: 1
} | {
  b: 2
}

type Bar = {
  c: 3
} & ({
  a: 1
} | {
  b: 2
})

const ins296: Bar = { c: 3, b: 2, a: 1 }

// function jsPermutation1<T>(target: T[], rest: T[] = target) {
//   const res = []

//   for (let i = 0; i < rest.length; i++) {

//   }

//   return res
// }

// TODO: js implement
// function popIndex<T>(arr: T[], item: T) {
//   const idx = arr.indexOf(item)

//   if (idx !== -1)
//     arr.splice(idx, 1)

//   return arr
// }

// function jsPermutation<T>(target: T[]) {
//   const res = []
//   const targetLen = target.length

//   function recursive(arr: T[]) {
//     const marked = []

//     for (let i = 0; i < arr.length; i++) {
//       const first = target[i]
//       res.push([first, ...recursive(popIndex(target, target[i]))])
//     }

//     return []
//   }

//   recursive(target)

//   return res
// }
