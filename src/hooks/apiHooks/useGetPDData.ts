import { useQuery } from '@tanstack/react-query'
import axiosConfig from '@/services/axiosConfig'
import { API_ENDPOINTS } from '@/services/endpoints'
import { PDData } from '@/models/PD'

export const useGetPDData = () => {
  return useQuery<PDData, Error>({
    queryKey: ['PDData'],
    queryFn: async () => {
      const { data } = await axiosConfig.get(API_ENDPOINTS.GET_PD_DATA)
      return data
    },
  })
}
