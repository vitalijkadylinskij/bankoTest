import { Button } from '@/components/ui/button'
import { Download as DownloadIcon } from 'lucide-react'
import PDDisplayModule from '@/modules/PDDisplayModule/PDDisplayModule'
import LGDTable from '@/components/Tables/LGDTable/LGDTable'
import EADTable from '@/components/Tables/EADTable/EADTable'
import { Link } from '@tanstack/react-router'
import ECLMoneyTable from '@/components/Tables/ECLMoneyTable/ECLMoneyTable'
import ECLCountTable from '@/components/Tables/ECLCountTable/ECLCountTable'
import { useTranslation } from 'react-i18next'
import { useGetDashboardData } from '@/hooks/useGetDashboardData'

export const DashboardPage = () => {
  const { t } = useTranslation()
  const { data, isLoading, isError } = useGetDashboardData()

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error occurred while fetching data</div>
  }

  return (
    <div className="max-w-full">
      <div className="flex items-center justify-between">
        <div className="mb-5 text-2xl font-bold leading-38 text-black-900">
          {t('dashboard.title')}
        </div>
        <Button
          onClick={() => console.log('hello')}
          variant="export"
          size="default"
        >
          <div className="flex items-center gap-1">
            <DownloadIcon className="h-4 w-4" />
            <div>{t('dashboard.buttons.exportBtn')}</div>
          </div>
        </Button>
      </div>
      {data.PDData && (
        <div className="mb-3">
          <PDDisplayModule data={data.PDData} />
        </div>
      )}
      <div className="mb-3 grid grid-cols-4 gap-4">
        {data.LGDData && (
          <div className="col-span-3">
            <LGDTable data={data.LGDData} />
          </div>
        )}
        {data.EADData && (
          <div className="col-span-1">
            <EADTable data={data.EADData} />
          </div>
        )}
      </div>
      <div className="w-full rounded-lg border bg-grey-300/40 p-1.5">
        <div className="my-2 ml-4 flex items-center justify-between">
          <div className="text-xl font-bold leading-24 text-black-800">
            {t('dashboard.tables.eclTable.title')}
          </div>
          <Button variant="export" size="default">
            <Link to="/credit-list">{t('dashboard.creditListBtn')}</Link>
          </Button>
        </div>
        {data.ECLData && (
          <div className="grid grid-cols-2 gap-2">
            <ECLMoneyTable moneyData={data.ECLData.moneyData} />
            <ECLMoneyTable moneyData={data.ECLData.moneyData} />
            <ECLCountTable countData={data.ECLData.countData} />
            <ECLCountTable countData={data.ECLData.countData} />
          </div>
        )}
      </div>
    </div>
  )
}
