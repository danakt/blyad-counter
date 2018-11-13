declare module 'fast-memoize' {
  function memoize<T extends (...args: any[]) => any>(fn: T): T
  // prettier-ignore
  namespace memoize {}
  export = memoize
}
