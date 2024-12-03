import { useQuery } from '@tanstack/react-query'
import axiosConfig from '@/services/axiosConfig'
import { API_ENDPOINTS } from '@/services/endpoints'
import { GBVStageData } from '@/models/GBVStage'

export const useGetGBVStageData = () => {
  return useQuery<GBVStageData[], Error>({
    queryKey: ['GBVStageData'],
    queryFn: async () => {
      const { data } = await axiosConfig.get(API_ENDPOINTS.GET_GBV_STAGE_DATA)
      return data
    },
  })
}
