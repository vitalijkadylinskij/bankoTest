import * as React from 'react'
import { Label, Pie, PieChart, Cell, LabelProps } from 'recharts'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import {
  ContainerBody,
  ContainerComponent,
} from '@/components/ContainerComponent/ContainerComponent'
import { FC } from 'react'
import {
  addColorsToChartData,
  createChartConfig,
  ExtendedViewBox,
} from '@/modules/GBVChartModule/GBVChartConfig'
import { GBVData } from '@/models/GBV'

interface GBVChartProps {
  data: GBVData[]
}

export const GBVChartModule: FC<GBVChartProps> = ({ data }) => {
  const { t } = useTranslation()
  const chartConfig = createChartConfig(data) as ChartConfig
  const totalCredit = React.useMemo(
    () => data.reduce((acc, curr) => acc + curr.value, 0),
    [data]
  )
  const coloredChartData = addColorsToChartData(data)

  const renderLabel = ({ viewBox }: LabelProps) => {
    if (!viewBox) return null
    const { cx, cy } = viewBox as ExtendedViewBox
    return (
      <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
        <tspan
          x={cx}
          y={cy - 20}
          className="fill-muted-foreground text-ssm leading-14 text-grey-900"
        >
          {t('biAnalytics.gbvChart.subtitle')}
        </tspan>
        <tspan
          x={cx}
          y={cy}
          className="fill-foreground text-md font-bold leading-18 text-black-800"
        >
          {totalCredit.toLocaleString()}
        </tspan>
        <tspan
          x={cx}
          y={cy + 24}
          className="fill-foreground text-md font-bold leading-18 text-black-800"
        >
          BYN
        </tspan>
      </text>
    )
  }

  const renderLegend = () => (
    <div className="grid grid-cols-2 gap-2">
      {Object.entries(chartConfig).map(([key, { label, color }]) => {
        if (key !== 'value') {
          return (
            <div key={key} className="flex items-center gap-2">
              <div className="h-4 w-4" style={{ backgroundColor: color }} />
              <span>{label}</span>
            </div>
          )
        }
        return null
      })}
    </div>
  )

  return (
    <ContainerComponent withBg={true} title={t('biAnalytics.gbvChart.title')}>
      <ContainerBody isScrolling={false}>
        <Card className="flex min-h-[40vh] flex-col border-none">
          <CardContent className="flex justify-center pb-0">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[16rem] min-w-[16rem]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={coloredChartData}
                  dataKey="value"
                  nameKey="creditType"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  cornerRadius={3}
                  strokeWidth={0}
                  startAngle={90}
                  endAngle={-270}
                >
                  {coloredChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                  <Label content={renderLabel} />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter>{renderLegend()}</CardFooter>
        </Card>
      </ContainerBody>
    </ContainerComponent>
  )
}
