import { FC, useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm, Controller, FieldErrors } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { MacroSettings } from '@/models/MacroSettings';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

interface MacroSettingsModalProps {
  isOpen: boolean;
  years: (string | number)[];
  onClose: () => void;
  onSubmitForm: (data: MacroSettings) => void;
  editingIndicator: MacroSettings | null;
  scenarios: string[];
}

export const MacroSettingsModal: FC<MacroSettingsModalProps> = ({
  isOpen,
  years,
  onClose,
  onSubmitForm,
  editingIndicator,
  scenarios,
}) => {
  const { t } = useTranslation();

  const createInitialFormState = (): MacroSettings => {
    const values: Record<string | number, Record<string, { value: number; probability: number }>> = {};
    years.forEach((year) => {
      values[year as string | number] = {};
      scenarios.forEach((scenario: string) => {
        values[year as string | number][scenario as string] = {
          value: -1,
          probability: 0,
        };
      });
    });
    return {
      id: '',
      type: '',
      values,
    };
  };


  const macroSettingsSchema = z.object({
    id: z.string().optional(),
    type: z.string().min(1),
    values: z.record(
      z.string(),
      z.object({
        Лучш: z.object({
          value: z.number().nonnegative().min(0),
          probability: z.number().min(0).max(100),
        }),
        Норм: z.object({
          value: z.number().nonnegative().min(0),
          probability: z.number().min(0).max(100),
        }),
        Худш: z.object({
          value: z.number().nonnegative().min(0),
          probability: z.number().min(0).max(100),
        }),
      }).refine((data) => {
        const totalProbability =
          data['Худш'].probability + data['Норм'].probability + data['Лучш'].probability;
        return totalProbability === 100;
      }),
    ),
  });

  const form = useForm<MacroSettings>({
    defaultValues: createInitialFormState(),
    resolver: zodResolver(macroSettingsSchema),
  });

  const { reset, control, formState: { errors } } = form;

  useMemo(() => {
    if (editingIndicator) {
      reset(editingIndicator);
    } else {
      reset(createInitialFormState());
    }
  }, [editingIndicator, reset, years]);

  const onSubmit = (data: MacroSettings) => {
    onSubmitForm(data);
  };

  useEffect(() => {
    console.log('1', form.formState.errors);
  });

  const [yearErrors, setYearErrors] = useState<Record<string, boolean>>({});

  const showToastForErrors = (errors: FieldErrors) => {
    const newYearErrors: Record<string, boolean> = {};
  
    if (errors.type) {
      toast.error(t('errorsModal.errorTypeMessage'));
    }
  
    const valuesErrors = errors.values as Record<string, Record<string, any>>;
    if (valuesErrors) {
      for (const year of Object.keys(valuesErrors)) {
        const yearErrors = valuesErrors[year];
        let totalProbability = 0;
        if (yearErrors) {
          for (const scenario of Object.keys(yearErrors)) {
            const scenarioErrors = yearErrors[scenario];
            if (scenarioErrors?.value) {
              toast.error(t('errorsModal.errorValueMessage', { year, scenario }));
              return;
            }
            if (scenarioErrors?.probability) {
              totalProbability += scenarioErrors.probability;
            }
          }
          if (totalProbability !== 100) {
            toast.error(t('errorsModal.errorProbabilityMessage', { year }));
            newYearErrors[year] = true; // Устанавливаем ошибку для года
            return;
          } else {
            newYearErrors[year] = false; // Ошибка отсутствует для этого года
          }
        }
      }
    }
  
    setYearErrors(newYearErrors); // Обновляем состояние ошибок по годам
  };
  

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[25rem]">
          <DialogHeader>
            <DialogTitle>
              {editingIndicator ? t('sidebar.macroSettings.modal.editTitle') : t('sidebar.macroSettings.modal.addTitle')}
            </DialogTitle>
          </DialogHeader>

          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value} disabled={!!editingIndicator}>
                <SelectTrigger className={`border-2 p-2 rounded-md ${errors?.type ? 'border-red-500 text-red-500' : 'border-grey-600 text-black-800'}`}>
                  <SelectValue placeholder={t('sidebar.macroSettings.modal.macroTypes.default')} />
                </SelectTrigger>
                <SelectContent>
                  {[t('sidebar.macroSettings.modal.macroTypes.items.rrdn'), t('sidebar.macroSettings.modal.macroTypes.items.nnzp')].map((item, index) => (
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
              {[t('sidebar.macroSettings.modal.subtitles.scenariosFull.worst'), t('sidebar.macroSettings.modal.subtitles.scenariosFull.normal'), t('sidebar.macroSettings.modal.subtitles.scenariosFull.best')].map((scenarioFull: string, index: number) => {
                const scenarioShort = scenarios[index];
                return (
                  <div key={scenarioShort} className="grid grid-cols-3 items-center gap-1">
                    <div className="modal-content-text">{scenarioFull}</div>
                    <Controller
                      name={`values.${year}.${scenarioShort}.value`}
                      control={control}
                      render={({ field }) => (
                        <Input
                          type="text"
                          {...field}
                          placeholder={t('sidebar.macroSettings.modal.subtitles.value')}
                          className={`mt-2 w-full appearance-none ${errors.values?.[year]?.[scenarioShort]?.value 
                            ? 'border-red-500 text-red-500' 
                            : 'border border-grey-600 text-black-800'}`}
                          onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d*$/.test(value)) {
                              field.onChange(Number(value));
                            }
                          }}
                        />
                      )}
                    />
                    <Controller
                      name={`values.${year}.${scenarioShort}.probability`}
                      control={control}
                      render={({ field }) => (
                        <Input
                          type="text"
                          {...field}
                          placeholder={t('sidebar.macroSettings.modal.subtitles.probability')}
                          className={`mt-2 w-full appearance-none ${ errors?.values?.[year]?.root?.message
                            ? 'border-red-500 text-red-500' 
                            : 'border border-grey-600 text-black-800'}`}
                          onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d*$/.test(value)) {
                              field.onChange(Number(value));
                            }
                          }}
                        />
                      )}
                    />
                  </div>
                );
              })}
            </div>
          ))}

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="secondary" onClick={onClose} className="w-full">
              {t('sidebar.macroSettings.modal.buttons.cancelBtn')}
            </Button>
            <Button
              onClick={form.handleSubmit(
                (data) => {
                  onSubmit(data);
                  console.log('Submit data', data);
                },
                (errors) => {
                  showToastForErrors(errors); // Показываем ошибки
                  console.error('Validation errors:', errors);
                  console.log('Form Values:', form.getValues());
                }
              )}
              variant="primary"
              className="w-full"
            >
              {t('sidebar.macroSettings.modal.buttons.saveBtn')}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </form>
  );
};