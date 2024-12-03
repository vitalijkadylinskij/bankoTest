import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { ChartContainer } from '@/components/ui/chart'
import {
  ContainerBody,
  ContainerComponent,
} from '@/components/ContainerComponent/ContainerComponent'
import { calculateOffsets } from '@/utils/updaterStageData'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import {
  colors,
  createChartConfig,
  getCustomLegend,
  stageNames,
} from './GBVStageChartConfig'
import { GBVStageData } from '@/models/GBVStage'

interface GBVStageChartProps {
  data: GBVStageData[]
}

export const GBVStageChartModule: FC<GBVStageChartProps> = ({ data }) => {
  const { t } = useTranslation()

  const chartConfig = createChartConfig(data)
  const chartData = calculateOffsets(data)
  const customLegend = getCustomLegend(t)

  return (
    <ContainerComponent
      withBg={true}
      title={t('biAnalytics.gbvStageChart.title')}
    >
      <ContainerBody isScrolling={true} orientation="horizontal">
        <ChartContainer className="max-h-[40vh] w-full" config={chartConfig}>
          <BarChart
            layout="vertical"
            data={chartData}
            margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
            barSize={30}
          >
            <CartesianGrid strokeDasharray="4 4" horizontal={false} />
            <XAxis
              tickCount={5}
              type="number"
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              dataKey="name"
              type="category"
              width={100}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              formatter={(value, name) => {
                const stageLabel = stageNames[name as keyof typeof stageNames]
                return [value, stageLabel || name]
              }}
            />

            <Legend
              payload={customLegend.map((item, index) => ({
                id: `item-${index}`,
                value: item.value,
                type: 'rect',
                color: item.color,
              }))}
            />
            {/* Рендеринг стека баров с динамическими данными и цветами */}
            {[
              'offset1',
              'stage1',
              'offset2',
              'stage2',
              'offset3',
              'stage3',
              'offset4',
              'stage4',
            ].map((key, index) => (
              <Bar
                key={key}
                dataKey={key}
                stackId="name"
                fill={
                  key.startsWith('offset')
                    ? 'transparent'
                    : colors[(index / 2) | 0]
                }
                radius={key.startsWith('offset') ? undefined : [5, 5, 5, 5]}
                style={
                  key.startsWith('offset')
                    ? {}
                    : { stroke: '#fff', strokeWidth: 2 }
                }
              />
            ))}
          </BarChart>
        </ChartContainer>
      </ContainerBody>
    </ContainerComponent>
  )
}
