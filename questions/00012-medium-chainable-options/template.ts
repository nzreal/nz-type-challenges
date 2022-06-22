type Chainable<T = {}> = {
  option<K extends string, V = any>(key: K extends keyof T? never: K, value: V): Chainable<T & { [O in K]: V }>
  get(): T
}

// result2 无法重复定义 option

class JsChainable<T = {}> {
  res: T

  constructor() {
    this.res = {} as T
  }

  option<K extends string, V = any>(key: K extends keyof T? never: K, value: V) {
    if (key in Object.keys(this.res))
      throw new Error(`${key} has been optioned in object`)

    this.res = {
      ...this.res,
      [key]: value,
    }

    return this as unknown as JsChainable<T & { [O in K]: V }>
  }

  get(): T {
    return this.res
  }
}

const ins12 = new JsChainable()
  .option('test', 'ss')
  .option('test2', 123)
  .option('test3', {
    childtest: () => {},
  })
  .option('test4', 123 as const)
  .get()
