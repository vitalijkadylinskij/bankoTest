import { FC, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import {
  ContainerBody,
  ContainerComponent,
  ContainerHeader,
} from '@/components/ContainerComponent/ContainerComponent'
import PDTable from '@/components/Tables/PDTable/PDTable'
import { PDData } from '@/models/PD'
import { useTranslation } from 'react-i18next'

type DisplayMode = 'yearly' | 'quarterly' | 'monthly'
type ViewMode = 'table' | 'chart'

interface PDDataDisplayProps {
  data: PDData
}

const PDDisplayModule: FC<PDDataDisplayProps> = ({ data }) => {
  const [displayMode, setDisplayMode] = useState<DisplayMode>('yearly')
  const [viewMode, setViewMode] = useState<ViewMode>('table')
  const { t } = useTranslation()

  return (
    <ContainerComponent withBg={true}>
      <ContainerHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-14">
            <div className="text-xl font-bold leading-24 text-black-800">
              {t('dashboard.tables.pdTable.title')}
            </div>
            <div className="mr-14 flex gap-2 text-md font-normal leading-5 text-black-900">
              <Button
                onClick={() => setDisplayMode('yearly')}
                variant={displayMode === 'yearly' ? 'ghost' : 'secondary'}
              >
                {t('dashboard.tables.pdTable.buttons.yearBtn')}
              </Button>
              <Button
                onClick={() => setDisplayMode('quarterly')}
                variant={displayMode === 'quarterly' ? 'ghost' : 'secondary'}
              >
                {t('dashboard.tables.pdTable.buttons.quarterBtn')}
              </Button>
              <Button
                onClick={() => setDisplayMode('monthly')}
                variant={displayMode === 'monthly' ? 'ghost' : 'secondary'}
              >
                {t('dashboard.tables.pdTable.buttons.monthBtn')}
              </Button>
            </div>
            <div className="ml-16 flex items-center gap-2">
              <span className="text-ssm font-normal text-grey-900">
                Таблица
              </span>
              <Switch
                checked={viewMode === 'chart'}
                onCheckedChange={(checked) =>
                  setViewMode(checked ? 'chart' : 'table')
                }
              />
              <span className="text-ssm font-normal text-grey-900">График</span>
            </div>
          </div>
        </div>
      </ContainerHeader>
      <ContainerBody isScrolling={true} orientation="horizontal">
        {viewMode === 'table' ? (
          <PDTable
            pdData={
              displayMode === 'yearly'
                ? data.yearlyPDData
                : displayMode === 'quarterly'
                  ? data.quarterPDData
                  : data.monthPDData
            }
            displayMode={displayMode}
          />
        ) : (
          <PDTable
            pdData={
              displayMode === 'yearly'
                ? data.yearlyPDData
                : displayMode === 'quarterly'
                  ? data.quarterPDData
                  : data.monthPDData
            }
            displayMode={displayMode}
          />
        )}
      </ContainerBody>
    </ContainerComponent>
  )
}

export default PDDisplayModule
