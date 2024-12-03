import { DataTable } from '@/components/CustomTableComponents/DataTable'
import {
  columns,
  owners,
  priorities,
  statuses,
  titles,
} from './ProfileReportsConfig'
import { ProfileReportData } from '@/models/ProfileReport'
import { FC } from 'react'

interface ProfileReportsProps {
  data: ProfileReportData[]
}
export const ProfileReportsModule: FC<ProfileReportsProps> = ({ data }) => {
  return (
    <DataTable
      columns={columns}
      data={data}
      titles={titles}
      filters={[
        { title: 'Статус', column: 'status', options: statuses },
        { title: 'Приоритет', column: 'priority', options: priorities },
        { title: 'Владелец', column: 'owner', options: owners },
      ]}
      searchPlaceholder="Поиск по названию отчёта"
      searchColumn="title"
      withContainer={false}
    />
  )
}
