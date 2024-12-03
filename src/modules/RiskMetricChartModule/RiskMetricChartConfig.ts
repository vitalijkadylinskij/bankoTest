import { TFunction } from 'i18next'
import { ChartConfig } from '@/components/ui/chart'

export const colors = {
  firstYear: 'var(--chart80)',
  secYear: 'var(--chart20)',
}

// Конфигурация для графика
export const chartConfig: ChartConfig = {
  firstYear: {
    label: 'Портфель 01.01.24',
    color: colors.firstYear,
  },
  secYear: {
    label: 'Портфель 01.01.25',
    color: colors.secYear,
  },
}

// Функция для генерации легенды
export const getChartLegend = (config: ChartConfig, t: TFunction) => {
  return Object.entries(config).map(([key, value]) => ({
    color: value.color,
    label: typeof value.label === 'string' ? t(value.label) : value.label,
  }))
}
