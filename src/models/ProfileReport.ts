export interface ProfileReportData {
  id: string
  date: string
  title: string
  owner: string
  status: 'В процессе проверки' | 'Завершён' | 'Отменён'
  priority: 'Важный' | 'Средний' | 'Низкий'
  label: 'Черновик' | 'Готово' | string
}
