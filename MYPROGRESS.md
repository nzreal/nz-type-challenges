# MY PROGRESS

## Challenge Progress

__~~Easy - Done~~__

__Middle - [Tuple To Union](https://file%2B.vscode-resource.vscode-cdn.net/Users/bytedance/Desktop/practice/nz-type-challenges/questions/00010-medium-tuple-to-union/README.md)__

__Hard - Not Start Yet__

## TODO

- [x] 联合类型分配 Union Type Distribution 学习
  - <https://github.com/nzreal/learning_summary/blob/master/TS/%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B%E5%88%86%E9%85%8D.md>
- [x] infer 到底能在什么地方使用呢
  - extends 后面
- [ ] equal & inner util type
  - 理论下述便可以满足
- [ ] why DeepReadonly2\<symbol> = symbol; DeepReadonly2\<number> = number
- [ ] configuration learning
- [ ] declare、namespace、module
  - https://ts.xcatliu.com/basics/declaration-files.html
  - <https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html>
  - <https://jkchao.github.io/typescript-book-chinese/project/modules.html#%E6%96%87%E4%BB%B6%E6%A8%A1%E5%9D%97> 文件模块也被称为外部模块。如果在你的 TypeScript 文件的根级别位置含有 import 或者 export，那么它会在这个文件中创建一个本地的作用域。
  - declare 在你的项目里，你可以通过 `declare module 'somePath'` 声明一个全局模块的方式，来解决查找模块路径的问题。
- [ ] 为什么 `keyof []` 会把原型链上的函数都带上，但是 `keyof {}` 不会
- [ ] Triple-Slash Directives
- [x] `import type xxx from 'xxx'` ts 作用域失效(?)
  - <https://jkchao.github.io/typescript-book-chinese/project/modules.html#%E6%96%87%E4%BB%B6%E6%A8%A1%E5%9D%97> 文件模块也被称为外部模块。如果在你的 TypeScript 文件的根级别位置含有 import 或者 export，那么它会在这个文件中创建一个本地的作用域
- [ ] `is` 使用
- [ ] `as` 于 ts 内部的使用
such as

```ts
type test<T extends Record<string, any>> = {[K in keyof T as string]: T[K]}
```

- [ ] ts 作用域问题，全局作用域配置，引入模块后默认模块作用域
