import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

export const getYearArray = (
  isCurrentYear: boolean,
  isString?: boolean,
  count: number = 4
): (number | string)[] => {
  const currentYear = new Date().getFullYear()
  const yearArray: (number | string)[] = []
  let i

  if (isCurrentYear) {
    i = 0
  } else {
    i = -1
  }

  for (i; i <= count - 1; i++) {
    const year = currentYear + i
    yearArray.push(isString ? year.toString() : year)
  }

  return yearArray
}

export const getAllMonths = (): string[] => {
  const months: string[] = []

  for (let i = 0; i < 12; i++) {
    const monthDate = new Date(2024, i)
    const monthName = format(monthDate, 'MMMM', { locale: ru })
    const capitalizedMonth =
      monthName.charAt(0).toUpperCase() + monthName.slice(1)
    months.push(capitalizedMonth)
  }

  return months
}

export const quarters = ['I кв', 'II кв', 'III кв', 'IV кв']
