import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectGroup,
} from '../select'
import { SelectValue } from '@radix-ui/react-select'
import { StoryFn } from '@storybook/react'
import '../../../global.css'

export default {
  title: 'Components/Select',
  component: Select,
}

interface SelectStoryArgs {
  className?: string
}

const Template: StoryFn = (args: SelectStoryArgs) => (
  <Select {...args}>
    <SelectTrigger>
      <SelectValue placeholder="Выберите опцию" />
    </SelectTrigger>
    <SelectContent>
      <SelectScrollUpButton />
      <SelectGroup>
        <SelectLabel>Опции</SelectLabel>
        <SelectSeparator />
        <SelectItem value="option1">Опция 1</SelectItem>
        <SelectItem value="option2">Опция 2</SelectItem>
        <SelectItem value="option3">Опция 3</SelectItem>
      </SelectGroup>
      <SelectScrollDownButton />
    </SelectContent>
  </Select>
)

export const Default = Template.bind({})
Default.args = {
  defaultValue: 'option1',
}
