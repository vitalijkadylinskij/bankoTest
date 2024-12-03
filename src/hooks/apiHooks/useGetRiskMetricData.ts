import { useQuery } from '@tanstack/react-query'
import axiosConfig from '@/services/axiosConfig'
import { API_ENDPOINTS } from '@/services/endpoints'
import { RiskMetricData } from '@/models/RiskMetric'

export const useGetRiskMetricData = () => {
  return useQuery<RiskMetricData[], Error>({
    queryKey: ['RiskMetricData'],
    queryFn: async () => {
      const { data } = await axiosConfig.get(API_ENDPOINTS.GET_RISK_METRIC_DATA)
      return data
    },
  })
}
