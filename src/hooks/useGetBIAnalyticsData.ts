import { useGetGBVData } from '@/hooks/apiHooks/useGetGBVData'
import { useGetGBVStageData } from '@/hooks/apiHooks/useGetGBVStageData'
import { useGetRiskMetricData } from '@/hooks/apiHooks/useGetRiskMetricData'

export const useGetBIAnalyticsData = () => {
  const gbv = useGetGBVData()
  const gbvStage = useGetGBVStageData()
  const riskMetric = useGetRiskMetricData()

  const data = {
    GBVData: gbv.data,
    GBVStageData: gbvStage.data,
    RiskMetricData: riskMetric.data,
  }

  const isLoading = gbv.isLoading || gbvStage.isLoading || riskMetric.isLoading
  const isError = gbv.isError || gbvStage.isError || riskMetric.isError

  return {
    data,
    isLoading,
    isError,
  }
}
