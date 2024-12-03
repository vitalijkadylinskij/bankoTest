import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import {
  ContainerBody,
  ContainerComponent,
} from '@/components/ContainerComponent/ContainerComponent'
import { FC } from 'react'
import { chartConfig, getChartLegend } from './RiskMetricChartConfig'
import { RiskMetricData } from '@/models/RiskMetric'

interface RiskMetricsChartProps {
  data: RiskMetricData[]
}

export const RiskMetricChartModule: FC<RiskMetricsChartProps> = ({ data }) => {
  const { t } = useTranslation()
  const legendItems = getChartLegend(chartConfig, t)

  return (
    <ContainerComponent
      withBg={true}
      title={t('biAnalytics.riskMetricsChart.title')}
    >
      <ContainerBody isScrolling={true} orientation="horizontal">
        <Card className="w-full">
          <CardContent className="h-[40vh] w-full">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <BarChart
                accessibilityLayer
                data={data}
                margin={{ top: 20, right: 20 }}
              >
                <YAxis
                  domain={[0, 5]}
                  tickCount={11}
                  tickLine={false}
                  axisLine={false}
                />
                <CartesianGrid strokeDasharray="4 4" vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dashed" />}
                />
                <Bar
                  dataKey="firstYear"
                  fill={chartConfig.firstYear.color}
                  radius={4}
                  barSize={30}
                />
                <Bar
                  dataKey="secYear"
                  fill={chartConfig.secYear.color}
                  radius={4}
                  barSize={30}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter>
            <div className="grid grid-cols-2 gap-2 pb-4">
              {legendItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="h-4 w-4"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </CardFooter>
        </Card>
      </ContainerBody>
    </ContainerComponent>
  )
}
