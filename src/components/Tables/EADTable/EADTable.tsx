import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  ContainerBody,
  ContainerComponent,
} from '@/components/ContainerComponent/ContainerComponent'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { EADData } from '@/models/EAD'

interface EADTableProps {
  data: EADData
}
const EADTable: FC<EADTableProps> = ({ data }) => {
  const { t } = useTranslation()
  return (
    <ContainerComponent
      withBg={true}
      title={t('dashboard.tables.eadTable.title')}
    >
      <ContainerBody isScrolling={true} orientation="horizontal">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="h-10">
                {t('dashboard.tables.eadTable.firstLvlHeaders.header1')}
              </TableHead>
              <TableHead className="h-10 border-x">
                {t('dashboard.tables.eadTable.firstLvlHeaders.header2')}
              </TableHead>
              <TableHead className="h-10">
                {t('dashboard.tables.eadTable.firstLvlHeaders.header3')}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-none">
              <TableCell className="h-2 border-r pb-1.5 pt-3.5 !text-left">
                {t('dashboard.tables.eadTable.secondLvlHeaders.header1')}
              </TableCell>
              <TableCell className="h-2 border-r pb-1.5 pt-2">
                {data.debitTurn[0]}
              </TableCell>
              <TableCell className="h-2 pb-1.5 pt-2">{data.ccf[0]}</TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="h-2 border-r py-1.5 !text-left">
                {t('dashboard.tables.eadTable.secondLvlHeaders.header2')}
              </TableCell>
              <TableCell className="h-2 border-r py-1.5">
                {data.debitTurn[1]}
              </TableCell>
              <TableCell className="h-2 py-1">{data.ccf[1]}</TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="h-2 border-r py-1.5 !text-left">
                {t('dashboard.tables.eadTable.secondLvlHeaders.header3')}
              </TableCell>
              <TableCell className="h-2 border-r py-1.5">
                {data.ccf[2]}
              </TableCell>
              <TableCell className="h-2 py-1">{data.ccf[2]}</TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="h-2 border-r pb-2.5 pt-2.5 !text-left">
                {t('dashboard.tables.eadTable.secondLvlHeaders.header4')}
              </TableCell>
              <TableCell className="h-2 border-r pb-2.5 pt-2.5">
                {data.ccf[3]}
              </TableCell>
              <TableCell className="h-2 pb-2.5 pt-2.5">{data.ccf[3]}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ContainerBody>
    </ContainerComponent>
  )
}

export default EADTable
