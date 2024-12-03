import { useQuery } from '@tanstack/react-query'
import axiosConfig from '@/services/axiosConfig'
import { API_ENDPOINTS } from '@/services/endpoints'
import { ProfileReportData } from '@/models/ProfileReport'

export const useGetProfileReportsData = () => {
  return useQuery<ProfileReportData[], Error>({
    queryKey: ['ProfileReportsData'],
    queryFn: async () => {
      const { data } = await axiosConfig.get(
        API_ENDPOINTS.GET_PROFILE_REPORTS_DATA
      )
      return data
    },
  })
}
