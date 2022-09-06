type Flip<T extends Record<string, any>> = { [K in keyof T as `${T[K]}`]: K }

  type test_4179 = Flip<{ pi: 3.14; bool: true }>
