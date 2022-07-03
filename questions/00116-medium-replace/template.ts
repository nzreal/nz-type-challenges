type Replace<S extends string, From extends string, To extends string> =
  From extends ''?
    S:
    S extends `${infer L}${From}${infer R}`? `${L}${To}${R}`: S

// function jsReplace(target: string, from: string, to: string) {
//   const targetLen = target.length

//   for (let startIdx = 0; startIdx < targetLen; startIdx++) {
//     let tmpStr = target[startIdx]
//     for (let endIdx = startIdx; endIdx < targetLen; endIdx++) {
//       if (tmpStr === from) {

//       }
//     }
//   }
// }

type test116 = Replace<'fff', '', '123'>
