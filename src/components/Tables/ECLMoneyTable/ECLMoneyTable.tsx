import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { FC } from 'react'
import {
  ContainerBody,
  ContainerComponent,
} from '@/components/ContainerComponent/ContainerComponent'
import { useTranslation } from 'react-i18next'
import { ECLData } from '@/models/ECL'

export type ECLMoneyData = Omit<ECLData, 'countData'>

const ECLMoneyTable: FC<ECLMoneyData> = ({ moneyData }) => {
  const { t } = useTranslation()
  return (
    <ContainerComponent withBg={false}>
      <ContainerBody isScrolling={true} orientation="horizontal">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/2 border-r">
                {t(
                  'dashboard.tables.eclTable.moneyTable.firstLvlHeaders.header1'
                )}
              </TableHead>
              <TableHead className="w-1/4 border-r">
                {t(
                  'dashboard.tables.eclTable.moneyTable.firstLvlHeaders.header2'
                )}
              </TableHead>
              <TableHead className="w-1/4">
                {t(
                  'dashboard.tables.eclTable.moneyTable.firstLvlHeaders.header3'
                )}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="border-r">
                {t(
                  'dashboard.tables.eclTable.moneyTable.secondLvlHeaders.header1'
                )}
                <span className="font-bold">{moneyData.date}</span>
              </TableCell>
              <TableCell className="border-r">{moneyData.credit}</TableCell>
              <TableCell>{moneyData.opp}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ContainerBody>
    </ContainerComponent>
  )
}

export default ECLMoneyTable
