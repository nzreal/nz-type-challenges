type MyAwaited<T extends Promise<unknown>> =
  T extends Promise<infer K> ?
      (K extends Promise<unknown> ? MyAwaited<K> : K) : never

// js
function myAwait<T>(promise: Promise<T>): Promise<T> {
  return Promise.resolve(promise)
}
