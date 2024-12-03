import { useQuery } from '@tanstack/react-query'
import axiosConfig from '@/services/axiosConfig'
import { API_ENDPOINTS } from '@/services/endpoints'
import { GBVData } from '@/models/GBV'

export const useGetGBVData = () => {
  return useQuery<GBVData[], Error>({
    queryKey: ['GBVData'],
    queryFn: async () => {
      const { data } = await axiosConfig.get(API_ENDPOINTS.GET_GBV_DATA)
      return data
    },
  })
}
