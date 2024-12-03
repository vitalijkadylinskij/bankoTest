import { Bar } from '@/components/ui/bar'
import React, { FC, useState } from 'react'
import { DebtorForm } from '@/modules/SidebarModule/DebtorForm/DebtorForm'
import { MacroSettingsComponent } from '@/modules/SidebarModule/MacroSettings/MacroSettings'
import { getYearArray } from '@/utils/getDate'
import { MacroSettings } from '@/models/MacroSettings'
import { FormData } from '@/models/FormData'

interface SidebarProps {
  isCollapsed: boolean
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
  isDialogOpen: boolean
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const SidebarModule: FC<SidebarProps> = ({
  isCollapsed,
  setIsCollapsed,
  isDialogOpen,
  setIsDialogOpen,
}) => {
  const toggleCollapse = () => setIsCollapsed((prev) => !prev)
  const [debtorData, setDebtorData] = useState<FormData | null>(null)
  const [macroData, setMacroData] = useState<MacroSettings[]>([])

  const postSettings = (
    debtorData: FormData | null,
    macroData: MacroSettings[]
  ) => {
    return function () {
      console.log('Форма: ', debtorData)
      console.log('Макро: ', macroData)
    }
  }
  const years = getYearArray(true, true, 3)
  return (
    <div className={`fixed left-0 top-0 z-20 h-full`}>
      <Bar isCollapsed={isCollapsed} toggleCollapse={toggleCollapse}>
        <div className="flex h-full flex-col items-center">
          <h2 className="pb-10 pt-8 text-2xl font-extrabold leading-9 text-blue-900">
            ЛОГО
          </h2>
          <div className="w-full overflow-y-auto overflow-x-hidden">
            <div className="rounded-lg bg-white p-4">
              <DebtorForm setDebtorData={setDebtorData} />
            </div>
            <MacroSettingsComponent
              postSettings={postSettings(debtorData, macroData)}
              setMacroData={setMacroData}
              years={years}
              isDialogOpen={isDialogOpen}
              setIsDialogOpen={setIsDialogOpen}
            />
          </div>
        </div>
      </Bar>
    </div>
  )
}
