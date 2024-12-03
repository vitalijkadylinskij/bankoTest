import { ProfileReportsModule } from '@/modules/ProfileReportsModule/ProfileReportsModule'
import { useGetProfileReportsData } from '@/hooks/apiHooks/useGetProfileReportsData'

export const ProfilePage = () => {
  const {
    data: ProfileReportsData,
    isLoading: profileReportsLoading,
    isError: profileReportsError,
  } = useGetProfileReportsData()

  const isLoading = profileReportsLoading
  const isError = profileReportsError

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error occurred while fetching data</div>
  }

  return (
    <div className="hidden h-full flex-1 flex-col md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="mb-5 text-2xl font-bold leading-38 text-black-900">
            С возвращением!
          </h2>
          <p className="text-muted-foreground">
            Вот список доступных вам отчётов!
          </p>
        </div>
      </div>
      {ProfileReportsData && <ProfileReportsModule data={ProfileReportsData} />}
    </div>
  )
}
