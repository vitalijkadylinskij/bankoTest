import { useQuery } from '@tanstack/react-query'
import axiosConfig from '@/services/axiosConfig'
import { API_ENDPOINTS } from '@/services/endpoints'
import { EADData } from '@/models/EAD'

export const useGetEADData = () => {
  return useQuery<EADData, Error>({
    queryKey: ['EADData'],
    queryFn: async () => {
      const { data } = await axiosConfig.get(API_ENDPOINTS.GET_EAD_DATA)
      return data
    },
  })
}
