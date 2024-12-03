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
import { LGDData } from '@/models/LGD'

interface LGDTableProps {
  data: LGDData
}

const LGDTable: FC<LGDTableProps> = ({ data }) => {
  const { t } = useTranslation()
  return (
    <ContainerComponent withBg={true} title="LGD">
      <ContainerBody isScrolling={true} orientation="horizontal">
        <Table className="w-full table-fixed">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[30%]" colSpan={1}>
                {t('dashboard.tables.lgdTable.firstLvlHeaders.header1')}
              </TableHead>
              <TableHead className="w-1/5 border" colSpan={1}>
                {t('dashboard.tables.lgdTable.firstLvlHeaders.header2')}
              </TableHead>
              <TableHead className="w-1/2" colSpan={6}>
                {t('dashboard.tables.lgdTable.firstLvlHeaders.header3')}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell
                className="border-r !text-ssm font-normal leading-14 text-grey-900"
                colSpan={1}
              >
                {t('dashboard.tables.lgdTable.secondLvlHeaders.header1')}
              </TableCell>
              <TableCell className="border-r">
                {t('dashboard.tables.lgdTable.secondLvlHeaders.header2')}
              </TableCell>
              <TableCell className="pr-0 text-center !text-ssm font-normal leading-14 text-grey-900">
                {t('dashboard.tables.lgdTable.secondLvlHeaders.header3')}
              </TableCell>
              <TableCell
                colSpan={2}
                className="px-0 text-center !text-ssm font-normal leading-14 text-grey-900"
              >
                {t('dashboard.tables.lgdTable.secondLvlHeaders.header4')}
              </TableCell>
              <TableCell
                colSpan={2}
                className="px-0 text-center !text-ssm font-normal leading-14 text-grey-900"
              >
                {t('dashboard.tables.lgdTable.secondLvlHeaders.header5')}
              </TableCell>
              <TableCell className="pl-0 !text-ssm font-normal leading-14 text-grey-900">
                {t('dashboard.tables.lgdTable.secondLvlHeaders.header6')}
              </TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="border-r">
                {t('dashboard.tables.lgdTable.thirdLvlHeaders.header1')}
              </TableCell>
              <TableCell className="border-r">{data.RRData[0] + '%'}</TableCell>
              <TableCell>{data.RRData[1] + '%'}</TableCell>
              <TableCell colSpan={2}>{data.RRData[2] + '%'}</TableCell>
              <TableCell colSpan={2}>{data.RRData[3] + '%'}</TableCell>
              <TableCell>{data.RRData[4] + '%'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border-r pt-0">
                {t('dashboard.tables.lgdTable.thirdLvlHeaders.header2')}
              </TableCell>
              <TableCell className="border-r">
                {data.LGDData[0] + '%'}
              </TableCell>
              <TableCell>{data.LGDData[1] + '%'}</TableCell>
              <TableCell colSpan={2}>{data.LGDData[2] + '%'}</TableCell>
              <TableCell colSpan={2}>{data.LGDData[3] + '%'}</TableCell>
              <TableCell>{data.LGDData[4] + '%'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>
                <div className="flex items-center justify-center gap-7">
                  <div>
                    {t('dashboard.tables.lgdTable.fourthLvlHeaders.header1')}
                  </div>
                  <div>{data.probability}</div>
                </div>
              </TableCell>
              <TableCell colSpan={6}>
                <div className="flex items-center justify-center gap-7">
                  <div>
                    {t('dashboard.tables.lgdTable.fourthLvlHeaders.header2')}
                  </div>
                  <div>{data.macroFactor}</div>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ContainerBody>
    </ContainerComponent>
  )
}

export default LGDTable
