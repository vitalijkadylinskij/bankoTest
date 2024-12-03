import { useQuery } from '@tanstack/react-query'
import axiosConfig from '@/services/axiosConfig'
import { API_ENDPOINTS } from '@/services/endpoints'
import { CreditListData } from '@/models/CreditList'

export const useGetCreditListData = () => {
  return useQuery<CreditListData[], Error>({
    queryKey: ['CreditListData'],
    queryFn: async () => {
      const { data } = await axiosConfig.get(API_ENDPOINTS.GET_CREDIT_LIST_DATA)
      return data
    },
  })
}
