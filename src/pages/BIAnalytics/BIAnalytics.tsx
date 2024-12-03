import { Button } from '@/components/ui/button'
import { Download as DownloadIcon } from 'lucide-react'
import { GBVStageChartModule } from '@/modules/GBVStageChartModule/GBVStageChartModule'
import { RiskMetricChartModule } from '@/modules/RiskMetricChartModule/RiskMetricChartModule'
import { GBVChartModule } from '@/modules/GBVChartModule/GBVChartModule'
import { useTranslation } from 'react-i18next'
import { useGetBIAnalyticsData } from '@/hooks/useGetBIAnalyticsData'

export const BIAnalyticsPage = () => {
  const { t } = useTranslation()
  const { data, isLoading, isError } = useGetBIAnalyticsData()

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
          BI-аналитика
        </div>
        <Button variant="export" size="default">
          <div className="flex items-center gap-1">
            <DownloadIcon className="h-4 w-4" />
            <div>{t('biAnalytics.buttons.exportBtn')}</div>
          </div>
        </Button>
      </div>
      <div className="mb-3 flex gap-3">
        {data.GBVData && (
          <div className="flex-4">
            <GBVChartModule data={data.GBVData} />
          </div>
        )}
        {data.GBVStageData && (
          <div className="flex-1">
            <GBVStageChartModule data={data.GBVStageData} />
          </div>
        )}
      </div>
      {data.RiskMetricData && (
        <RiskMetricChartModule data={data.RiskMetricData} />
      )}
      <div className="mb-3"></div>
    </div>
  )
}
