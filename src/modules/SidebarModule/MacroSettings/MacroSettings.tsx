import React, { FC, useEffect, useState } from 'react'
import { PlusCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MacroTable } from '@/components/Tables/MacroTable/MacroTable'
import { MacroSettingsModal } from './MacroSettingsModal/MacroSettingsModal'
import { useTranslation } from 'react-i18next'
import { MacroSettings } from '@/models/MacroSettings'

interface MacroSettingsProps {
  setMacroData: (data: MacroSettings[]) => void
  postSettings: () => void
  years: (string | number)[]
  isDialogOpen: boolean
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MacroSettingsComponent: FC<MacroSettingsProps> = ({
  setMacroData,
  years,
  postSettings,
  isDialogOpen,
  setIsDialogOpen,
}) => {
  const [indicators, setIndicators] = useState<MacroSettings[]>([])
  const [editingIndicator, setEditingIndicator] =
    useState<MacroSettings | null>(null)

  useEffect(() => {
    setMacroData(indicators)
  }, [indicators])

  const { t } = useTranslation()
  const handleAdd = (newIndicator: MacroSettings) => {
    setIndicators([...indicators, newIndicator])
  }

  const handleEdit = (updatedIndicator: MacroSettings) => {
    setIndicators(
      indicators.map((ind) =>
        ind.id === updatedIndicator.id ? updatedIndicator : ind
      )
    )
  }

  const handleDelete = (id: string) => {
    setIndicators(indicators.filter((ind) => ind.id !== id))
  }
  const scenarios = [
    t('sidebar.macroSettings.modal.subtitles.scenariosShort.worst'),
    t('sidebar.macroSettings.modal.subtitles.scenariosShort.normal'),
    t('sidebar.macroSettings.modal.subtitles.scenariosShort.best'),
  ]

  return (
    <div className="mx-auto p-0">
      <div className="mb-1 mt-6 flex items-center justify-between gap-9">
        <h2 className="text-base font-bold">
          {t('sidebar.macroSettings.title')}
        </h2>
        <Button
          className="p-0 text-blue-900 hover:text-charts-60"
          onClick={() => {
            setEditingIndicator(null)
            setIsDialogOpen(true)
          }}
        >
          <PlusCircle className="h-5 w-5" />
        </Button>
      </div>
      {indicators.length === 0 ? (
        <p className="text-sm font-normal leading-18 text-grey-900">
          {t('sidebar.macroSettings.subtext')}
        </p>
      ) : (
        <MacroTable
          years={years}
          btnText={t('sidebar.macroSettings.modal.buttons.recalculate')}
          indicators={indicators}
          scenarios={scenarios}
          postSettings={postSettings}
          onEdit={(indicator) => {
            setEditingIndicator(indicator)
            setIsDialogOpen(true)
          }}
          onDelete={handleDelete}
        />
      )}

      <MacroSettingsModal
        years={years}
        isOpen={isDialogOpen}
        scenarios={scenarios}
        onClose={() => setIsDialogOpen(false)}
        onSubmitForm={(data) => {
          if (editingIndicator) {
            handleEdit({ ...data, id: editingIndicator.id })
          } else {
            handleAdd({ ...data, id: Date.now().toString() })
          }
          setIsDialogOpen(false)
          setEditingIndicator(null)
        }}
        editingIndicator={editingIndicator}
      />
    </div>
  )
}
