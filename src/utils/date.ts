import { isBefore, isAfter, isEqual } from 'date-fns'

export const isBetween = (date: Date, from: Date, to: Date) => {
  return (
    (isAfter(date, from) || isEqual(date, from)) &&
    (isBefore(date, to) || isEqual(date, to))
  )
}
