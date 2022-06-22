type MyParameters<T extends (...args: any[]) => any> =
T extends (...args: [...infer K]) => any ? K : never

type testA = MyParameters<(a: string, params: { ss: 1 }) => void>
