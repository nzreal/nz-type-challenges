type Flatten<ARR extends any[]> =
  ARR extends [infer C, ... infer REST] ?
    C extends any[] ? [...Flatten<C>, ...Flatten<REST>]: [C, ...Flatten<REST>]: ARR

type test459 = Flatten<[1, 2, [3]]>

function flatten<T extends any[]>(arr: T): Flatten<T> {
  const res: any[] = []

  arr.forEach((item) => {
    if (Array.isArray(item))
      res.push(...flatten(item))

    else
      res.push(item)
  })

  return res as Flatten<T>
}
