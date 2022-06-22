type TupleToObject<T extends readonly (number | string | symbol)[]> = {
  [P in T[number]]: P
}

// TupleToObject js implement
const tupleToObject = (arr: any[]) => {
  const res = {} as Record<string, any>
  arr.forEach((item) => {
    res[item] = item
  })
  return res
}
