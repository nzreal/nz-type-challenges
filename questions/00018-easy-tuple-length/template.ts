type Length2<T extends readonly any[]> = T['length']

type Length<T extends readonly any[]> = T extends { length: infer P } ? P : never

// js
function length(arr: any[]) {
  if (!Array.isArray(arr))
    throw new Error('arr err')

  return arr.length
}
