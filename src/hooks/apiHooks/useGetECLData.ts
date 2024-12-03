import { useQuery } from '@tanstack/react-query'
import axiosConfig from '@/services/axiosConfig'
import { API_ENDPOINTS } from '@/services/endpoints'
import { ECLData } from '@/models/ECL'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const useGetECLData = () => {
  return useQuery<ECLData, Error>({
    queryKey: ['ECLData'],
    queryFn: async () => {
      await delay(2000)
      const { data } = await axiosConfig.get(API_ENDPOINTS.GET_ECL_DATA)
      return data
    },
  })
}
