import { GBVStageData } from '@/models/GBVStage'
import { TFunction } from 'i18next'

export const colors = [
  'var(--chart80)',
  'var(--chart60)',
  'var(--chart40)',
  'var(--chart20)',
]

/**
 * Функция для генерации конфигурации графика.
 * @param data Массив данных для графика.
 * @returns Объект конфигурации, содержащий метки и цвета для каждой записи.
 */
export const createChartConfig = (data: GBVStageData[]) => {
  return Object.fromEntries(
    data.map((item, index) => [
      item.name,
      {
        label: item.name,
        color: colors[index % colors.length],
      },
    ])
  )
}

export const getCustomLegend = (t: TFunction) => {
  return colors.map((color, index) => ({
    value: t(`biAnalytics.gbvStageChart.stages.product${index + 1}`),
    type: 'rect',
    color,
  }))
}

export const stageNames = {
  stage1: 'Стадия 1',
  stage2: 'Стадия 2',
  stage3: 'Стадия 3',
  stage4: 'POCI',
} as const
