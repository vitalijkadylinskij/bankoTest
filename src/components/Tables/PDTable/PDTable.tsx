import { FC } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { PDData } from '@/models/PD'
import { getYearArray, getAllMonths, quarters } from '@/utils/getDate'

interface PDTableProps {
  pdData:
    | PDData['monthPDData']
    | PDData['quarterPDData']
    | PDData['yearlyPDData']
  displayMode: 'yearly' | 'quarterly' | 'monthly'
}

const PDTable: FC<PDTableProps> = ({ pdData, displayMode }) => {
  const years = getYearArray(false)
  const months = getAllMonths()

  const getPeriods = () => {
    switch (displayMode) {
      case 'yearly':
        return years.map((year) => `${year}`)
      case 'quarterly':
        return years.flatMap((year) =>
          quarters.map((_, index) => `${year}_Q${index + 1}`)
        )
      case 'monthly':
        return years.flatMap((year) =>
          months.map((_, index) => `${year}_M${index + 1}`)
        )
      default:
        return []
    }
  }

  const periods = getPeriods()

  return (
    <div className="relative">
      <Table>
        <TableHeader>
          <TableRow className="border-b">
            <TableHead rowSpan={2} className="bg-muted"></TableHead>
            <TableHead rowSpan={2} className="bg-muted border-r"></TableHead>
            {years.map((year, index) => (
              <TableHead
                key={year}
                colSpan={
                  displayMode === 'yearly'
                    ? 1
                    : displayMode === 'quarterly'
                      ? 4
                      : 12
                }
                className={`bg-muted border-r ${index === 0 ? 'border-l' : ''}`}
              >
                {year}
              </TableHead>
            ))}
          </TableRow>
          {displayMode !== 'yearly' && (
            <TableRow className="border-b">
              {periods.map((period, index) => (
                <TableHead
                  key={period}
                  className={`bg-muted !text-ssm !font-normal !leading-14 text-grey-900 ${
                    index % (displayMode === 'quarterly' ? 4 : 12) === 0
                      ? 'border-l'
                      : ''
                  }`}
                >
                  {displayMode === 'quarterly'
                    ? quarters[parseInt(period.split('_Q')[1]) - 1]
                    : months[parseInt(period.split('_M')[1]) - 1]}
                </TableHead>
              ))}
            </TableRow>
          )}
        </TableHeader>
        <TableBody>
          {pdData.map((row, rowIndex) => (
            <TableRow key={rowIndex} className="border-none">
              <TableCell className="sticky left-0 z-20 w-5 bg-white/90">
                {row.range}
              </TableCell>
              <TableCell className="sticky left-14 z-20 w-5 border-r bg-white/90 text-grey-900">
                {row.type}
              </TableCell>
              {periods.map((period, periodIndex) => {
                const value = row.values[period] || '-'
                return (
                  <TableCell
                    key={`${rowIndex}-${periodIndex}`}
                    className={`text-center ${
                      periodIndex %
                        (displayMode === 'yearly'
                          ? 1
                          : displayMode === 'quarterly'
                            ? 4
                            : 12) ===
                      0
                        ? 'border-l'
                        : ''
                    }`}
                  >
                    {typeof value === 'number' ? value.toFixed(4) + '%' : value}
                  </TableCell>
                )
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default PDTable
