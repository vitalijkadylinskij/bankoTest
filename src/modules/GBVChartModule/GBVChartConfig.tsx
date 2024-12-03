import { GBVData } from '@/models/GBV'

const colors = [
  'var(--chart80)',
  'var(--chart60)',
  'var(--chart40)',
  'var(--chart20)',
]

export function createChartConfig(
  chartData: GBVData[],
  colorArray: string[] = colors
): Record<string, { label: string; color: string }> {
  return {
    value: { label: 'Общая стоимость', color: colorArray[0] },
    ...chartData.reduce(
      (config, item, index) => {
        config[`product${index + 1}`] = {
          label: item.creditType,
          color: colorArray[index] || 'var(--chart80)',
        }
        return config
      },
      {} as Record<string, { label: string; color: string }>
    ),
  }
}

export function addColorsToChartData(
  chartData: GBVData[]
): (GBVData & { fill: string })[] {
  return chartData.map((item, index) => ({
    ...item,
    fill: colors[index] || 'var(--chart80)',
  }))
}

export type ExtendedViewBox = {
  cx: number
  cy: number
  width: number
  height: number
}
