import { FC } from 'react'
import { useController, Control } from 'react-hook-form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { FormItem, FormLabel, FormControl } from '@/components/ui/form'
import { FormData } from '@/models/FormData'

interface CustomFormFieldProps {
  name: keyof FormData
  control: Control<FormData>
  fieldData: {
    title: string
    default: string
    items: string[]
  }
  onSubmit: (value: Partial<FormData>) => void
}

export const CustomFormField: FC<CustomFormFieldProps> = ({
  name,
  control,
  fieldData,
  onSubmit,
}) => {
  const { field } = useController({
    name,
    control,
    defaultValue: fieldData.default,
  })

  return (
    <FormItem className="mb-3">
      <FormLabel>{fieldData.title}</FormLabel>
      <Select
        onValueChange={(value) => {
          field.onChange(value)
          onSubmit({ [name]: value })
        }}
        defaultValue={typeof field.value === 'string' ? field.value : undefined}
      >
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder={fieldData.default} />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="default" disabled>
            {fieldData.default}
          </SelectItem>
          {fieldData.items.map((item, index) => (
            <SelectItem key={index} value={item.toLowerCase()}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FormItem>
  )
}
