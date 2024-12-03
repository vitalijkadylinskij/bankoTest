import { useGetLGDData } from '@/hooks/apiHooks/useGetLGDData'
import { useGetECLData } from '@/hooks/apiHooks/useGetECLData'
import { useGetPDData } from '@/hooks/apiHooks/useGetPDData'
import { useGetEADData } from '@/hooks/apiHooks/useGetEADData'

export const useGetDashboardData = () => {
  const lgdData = useGetLGDData()
  const eclData = useGetECLData()
  const pdData = useGetPDData()
  const eadData = useGetEADData()

  const data = {
    ECLData: eclData.data,
    LGDData: lgdData.data,
    EADData: eadData.data,
    PDData: pdData.data,
  }

  const isLoading =
    eclData.isLoading ||
    lgdData.isLoading ||
    eadData.isLoading ||
    pdData.isLoading
  const isError =
    eclData.isError || lgdData.isError || eadData.isError || pdData.isError

  return {
    data,
    isLoading,
    isError,
  }
}
