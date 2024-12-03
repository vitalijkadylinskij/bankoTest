import { useQuery } from '@tanstack/react-query'
import axiosConfig from '@/services/axiosConfig'
import { API_ENDPOINTS } from '@/services/endpoints'
import { LGDData } from '@/models/LGD'

export const useGetLGDData = () => {
  return useQuery<LGDData, Error>({
    queryKey: ['LGDData'],
    queryFn: async () => {
      const { data } = await axiosConfig.get(API_ENDPOINTS.GET_LGD_DATA)
      return data
    },
  })
}
