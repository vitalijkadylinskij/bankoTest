import { FC, useEffect, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useForm, Controller, useFormState, FieldErrors } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { MacroSettings } from '@/models/MacroSettings'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'

interface MacroSettingsModalProps {
  isOpen: boolean
  years: (string | number)[]
  onClose: () => void
  onSubmitForm: (data: MacroSettings) => void
  editingIndicator: MacroSettings | null
  scenarios: string[]
}

export const MacroSettingsModal: FC<MacroSettingsModalProps> = ({
  isOpen,
  years,
  onClose,
  onSubmitForm,
  editingIndicator,
  scenarios,
}) => {
  const { t } = useTranslation()

  const createInitialFormState = (): MacroSettings => {
    const values: Record<
      string | number,
      Record<string, { value: number; probability: number; }>
    > = {}
    years.forEach((year) => {
      values[year as string | number] = {}
      scenarios.forEach((scenario: string) => {
        values[year as string | number][scenario as string] = {
          value: 0,
          probability: 0,
        }
      })
    }
  )
    return {
      id: '',
      type: '',
      values,
    }
  }

  const macroSettingsSchema = z.object({
    id: z.string().optional(),
    type: z.string().min(1, 'Type is required'),
    values: z.record(
      z.string(),
      z.object({
        Лучш: z.object({
          value: z.number().nonnegative('Value must be a non-negative number'),
          probability: z
            .number()
            .nonnegative('Probability must be a non-negative number'),
        }),
        Норм: z.object({
          value: z.number().nonnegative('Value must be a non-negative number'),
          probability: z
            .number()
            .nonnegative('Probability must be a non-negative number'),
        }),
        Худш: z.object({
          value: z.number().nonnegative('Value must be a non-negative number'),
          probability: z
            .number()
            .nonnegative('Probability must be a non-negative number'),
        }),
      }).refine(data => {
        // Считаем сумму вероятностей
        const totalProbability = data.Лучш.probability + data.Норм.probability + data.Худш.probability;
        // Проверяем, что сумма равна 100
        return totalProbability === 100;
      }, {
        message: "The sum of probabilities must equal 100",
      })
    ),
  })

  const form = useForm<MacroSettings>({
    defaultValues: createInitialFormState(),
    resolver: zodResolver(macroSettingsSchema),
  })

  const { reset, control, formState: { errors } } = form

  useMemo(() => {
    if (editingIndicator) {
      reset(editingIndicator)
    } else {
      reset(createInitialFormState())
    }
  }, [editingIndicator, reset, years])

  const onSubmit = (data: MacroSettings) => {
      onSubmitForm(data);
  }

  useEffect(() => {
    console.log('1',form.formState.errors);
  });

  const showToastForErrors = (errors: FieldErrors) => {
    if (errors.type) {
      toast.error(`${errors.type.message}`);
    }
  
    const valuesErrors = errors.values;
  
    if (Array.isArray(valuesErrors)) {
      valuesErrors.forEach((valError) => {
        if (valError.root && typeof valError.root === 'object') {
          console.log('Field Error Object:', valError);
          if (valError.Лучш) {
            if (valError.Лучш.value) {
              toast.error(valError.Лучш.value.message);
            }
            if (valError.Лучш.probability) {
              toast.error(valError.Лучш.probability.message);
            }
          }
          if (valError.Норм) {
            if (valError.Норм.value) {
              toast.error(valError.Норм.value.message);
            }
            if (valError.Норм.probability) {
              toast.error(valError.Норм.probability.message);
            }
          }
          if (valError.Худш) {
            if (valError.Худш.value) {
              toast.error(valError.Худш.value.message);
            }
            if (valError.Худш.probability) {
              toast.error(valError.Худш.probability.message);
            }
          }
        }
      });
    }
  };
  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[25rem]">
          <DialogHeader>
            <DialogTitle>
              {editingIndicator
                ? t('sidebar.macroSettings.modal.editTitle')
                : t('sidebar.macroSettings.modal.addTitle')}
            </DialogTitle>
          </DialogHeader>
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                value={field.value}
                disabled={!!editingIndicator}
              >
                <SelectTrigger>
                  <SelectValue
                    placeholder={t(
                      'sidebar.macroSettings.modal.macroTypes.default'
                    )}
                  />
                </SelectTrigger>
                <SelectContent>
                  {[
                    t('sidebar.macroSettings.modal.macroTypes.items.rrdn'),
                    t('sidebar.macroSettings.modal.macroTypes.items.nnzp'),
                  ].map((item, index) => (
                    <SelectItem key={index} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {years.map((year) => (
            <div key={year} className="space-y-2">
              <div className="mb-4 text-md font-bold leading-18 text-black-800">
                {year}
              </div>
              <div className="mb-3 grid grid-cols-3 gap-1">
                <div className="text-md font-normal leading-18 text-grey-900">
                  {t('sidebar.macroSettings.modal.subtitles.scenario')}
                </div>
                <div className="text-md font-semibold leading-18 text-black-800">
                  {t('sidebar.macroSettings.modal.subtitles.value')}
                </div>
                <div className="text-md font-semibold leading-18 text-black-800">
                  {t('sidebar.macroSettings.modal.subtitles.probability')}
                </div>
              </div>
              {[
                t('sidebar.macroSettings.modal.subtitles.scenariosFull.worst'),
                t('sidebar.macroSettings.modal.subtitles.scenariosFull.normal'),
                t('sidebar.macroSettings.modal.subtitles.scenariosFull.best'),
              ].map((scenarioFull: string, index: number) => {
                const scenarioShort = scenarios[index]
                return (
                  <div
                    key={scenarioShort}
                    className="grid grid-cols-3 items-center gap-1"
                  >
                    <div className="modal-content-text">{scenarioFull}</div>
                    <Controller
                      name={`values.${year}.${scenarioShort}.value` as const}
                      control={control}
                      render={({ field }) => (
                        <Input
                          type="number"
                          {...field}
                          placeholder={t(
                            'sidebar.macroSettings.modal.subtitles.value'
                          )}
                          className="mt-2 w-full"
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                          onFocus={() => field.onChange('')}
                        />
                      )}
                    />
                    <Controller
                      name={
                        `values.${year}.${scenarioShort}.probability` as const
                      }
                      control={control}
                      render={({ field }) => (
                        <Input
                          type="number"
                          {...field}
                          placeholder={t(
                            'sidebar.macroSettings.modal.subtitles.probability'
                          )}
                          className="mt-2 w-full"
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                          onFocus={() => field.onChange('')}
                        />
                      )}
                    />
                  </div>
                )
              })}
            </div>
          ))}
          <div className="flex justify-end space-x-2 pt-4">
            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
              className="w-full"
            >
              {t('sidebar.macroSettings.modal.buttons.cancelBtn')}
            </Button>
            <Button onClick={form.handleSubmit((data) => {onSubmit(data), console.log('Submit data', data)}, 
            (errors) => {
                    showToastForErrors(errors) // Вызов функции показа уведомлений
                    console.error('Validation errors:', errors)
                    console.log('Form Values:', form.getValues())
                  }
                )} variant="primary" className="w-full">
              {t('sidebar.macroSettings.modal.buttons.saveBtn')}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </form>
  )
}
