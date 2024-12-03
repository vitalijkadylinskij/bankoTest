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

export type ECLCountData = Omit<ECLData, 'moneyData'>

const ECLCountTable: FC<ECLCountData> = ({ countData }) => {
  const { t } = useTranslation()
  return (
    <ContainerComponent withBg={false}>
      <ContainerBody isScrolling={true} orientation="horizontal">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/4 border-r"></TableHead>
              <TableHead className="w-1/4 border-r">
                {t(
                  'dashboard.tables.eclTable.countTable.firstLvlHeaders.header1'
                )
                  .split('\n')
                  .map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
              </TableHead>
              <TableHead className="w-1/4 border-r">
                {t(
                  'dashboard.tables.eclTable.countTable.firstLvlHeaders.header2'
                )
                  .split('\n')
                  .map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
              </TableHead>
              <TableHead className="w-1/4">
                {t(
                  'dashboard.tables.eclTable.countTable.firstLvlHeaders.header3'
                )
                  .split('\n')
                  .map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-none">
              <TableCell className="border-r">
                {t(
                  'dashboard.tables.eclTable.countTable.secondLvlHeaders.header1'
                )}
              </TableCell>
              <TableCell className="border-r">{countData.stage1[0]}</TableCell>
              <TableCell className="border-r">{countData.stage1[1]}</TableCell>
              <TableCell>{countData.stage1[2]}</TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="border-r">
                {t(
                  'dashboard.tables.eclTable.countTable.secondLvlHeaders.header2'
                )}
              </TableCell>
              <TableCell className="border-r">{countData.stage2[0]}</TableCell>
              <TableCell className="border-r">{countData.stage2[1]}</TableCell>
              <TableCell>{countData.stage2[2]}</TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="border-r">
                {t(
                  'dashboard.tables.eclTable.countTable.secondLvlHeaders.header3'
                )}
              </TableCell>
              <TableCell className="border-r">{countData.stage3[0]}</TableCell>
              <TableCell className="border-r">{countData.stage3[1]}</TableCell>
              <TableCell>{countData.stage3[2]}</TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="border-r">
                {t(
                  'dashboard.tables.eclTable.countTable.secondLvlHeaders.header4'
                )}
              </TableCell>
              <TableCell className="border-r">{countData.ukn[0]}</TableCell>
              <TableCell className="border-r">{countData.ukn[1]}</TableCell>
              <TableCell>{countData.ukn[2]}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ContainerBody>
    </ContainerComponent>
  )
}

export default ECLCountTable
