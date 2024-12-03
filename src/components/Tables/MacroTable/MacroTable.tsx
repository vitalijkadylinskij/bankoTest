import { Pencil, Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { MacroSettings } from '@/models/MacroSettings'

interface MacroTableProps {
  years: (string | number)[]
  scenarios: string[]
  btnText: string
  indicators: MacroSettings[]
  postSettings: () => void
  onEdit: (indicator: MacroSettings) => void
  onDelete: (id: string) => void
}

export const MacroTable = ({
  indicators,
  scenarios,
  years,
  onEdit,
  onDelete,
  postSettings,
  btnText,
}: MacroTableProps) => {
  return (
    <>
      {indicators.map((indicator) => (
        <div
          key={indicator.id}
          className="mb-3 rounded-lg bg-white p-4 shadow-sm"
        >
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-bold leading-5 text-black-800">
              {indicator.type}
            </h3>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onEdit(indicator)}
                className="text-gray-400 hover:text-gray-600"
              >
                <Pencil />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onDelete(indicator.id)}
                className="text-gray-400 hover:text-gray-600"
              >
                <Trash />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-1">
            <div className="col-span-1"></div>
            {scenarios.map((scenario) => (
              <div
                key={scenario}
                className="text-center text-ssm font-normal leading-14 text-grey-900"
              >
                {scenario}
              </div>
            ))}
            {years.map((year) => (
              <React.Fragment key={year}>
                <div className="mt-4 text-sm font-bold leading-4 text-grey-900">
                  {year}
                </div>
                {scenarios.map((scenario) => (
                  <div
                    key={scenario}
                    className={`rounded-lg py-3 text-center ${
                      scenario === 'Худш'
                        ? 'bg-lite-orange/5'
                        : scenario === 'Лучш'
                          ? 'bg-lite-green'
                          : 'bg-white'
                    }`}
                  >
                    <div className="text-sm font-normal leading-15 text-black-800">
                      {indicator.values[year][scenario].value}
                    </div>
                    <div className="text-sm font-normal leading-15 text-black-800">
                      ({indicator.values[year][scenario].probability}%)
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
      <div className="mb-10 pt-2 text-center">
        <Button
          onClick={() => postSettings()}
          variant="primary"
          className="w-3/4"
        >
          {btnText}
        </Button>
      </div>
    </>
  )
}
