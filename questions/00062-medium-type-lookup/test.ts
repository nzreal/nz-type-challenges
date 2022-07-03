const enum Keys {
  NORMAL = 'normal',
  SPECIAL = 'special',
}

type GetCustomType<T> = T extends Keys.NORMAL ? {
  type: 'normal'
}: {
  type: 'special'
}

// 由入参的 key 去决定 state 的 type，及决定后面的业务入参类型
class Dialog {
  showDialog(key: Keys.NORMAL, customData: {
    type: 'normal'
  }): any

  showDialog(key: Keys.SPECIAL, customData: {
    type: 'special'
  }): any

  showDialog<T extends string>(key: T, customData: any) {}
}

const dialog = new Dialog().showDialog(Keys.SPECIAL, { type: 'special' })
