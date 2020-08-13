import cryptoRandomString from 'crypto-random-string'

/**
 * 値があるかチェックをする
 */
export const isDefine = (value: any): boolean => {
  return value !== undefined && value !== null
}

/**
 * 値があるかチェックをする
 */
export const isUndefined = (value: any): boolean => {
  return value === undefined
}

/**
 * random文字列を生成する
 */
export const randomString = () => {
  return cryptoRandomString({ length: 10, type: 'url-safe' })
}

/**
 * 配列を指定数で分割する
 * [1, 2, 3, 4, 5, 6]
 * => [[1, 2], [3, 4], [5, 6]]
 */
export const arrayChunk = <T extends any[]>(arr: T, size: number): T[] => {
  return arr.reduce(
    (newArr, _, i) => (i % size ? newArr : [...newArr, arr.slice(i, i + size)]),
    [] as T[]
  )
}

/**
 * 指定範囲の連続した整数配列を生成する
 */
export const range = (start: number, end: number) => {
  const rangeArr = []
  for (let i = start; i <= end; i++) {
    rangeArr.push(i)
  }
  return rangeArr
}
