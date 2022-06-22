import fs from 'fs'
import path from 'path'

const clearMd = () => {
  const dirs = fs.readdirSync(path.join(__dirname, './questions'))
  console.log('dirs: ', dirs)
  dirs.forEach((dir) => {
    const path1 = path.join(__dirname, './questions', dir, 'README.ja.md')
    const path2 = path.join(__dirname, './questions', dir, 'README.ko.md')
    fs.existsSync(path1) && fs.rmSync(path1)
    fs.existsSync(path2) && fs.rmSync(path2)
  })
}

clearMd()

type a = 0 extends (any & 1) ? true : false

type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T]

type testa = FunctionPropertyNames<{
  a: Function
  b: number
  c: () => Promise<boolean>
}>
