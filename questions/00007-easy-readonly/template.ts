type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}

// readonly js implement
const ReadOnly = (obj: Record<string, any>) => {
  for (const key in obj) {
    Object.defineProperty(obj, key, {
      writable: false,
    })
  }

  return obj
}
