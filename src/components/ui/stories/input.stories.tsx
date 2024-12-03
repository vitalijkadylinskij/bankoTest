import { Input } from '../input' // Импортируем компонент Input
import type { Meta, StoryFn } from '@storybook/react'
import '../../../global.css'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    className: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    type: {
      control: {
        type: 'select',
        options: ['text', 'email', 'password', 'number'],
      },
    },
  },
} as Meta<typeof Input>

interface InputStoryArgs {
  className?: string
  disabled?: boolean
}

const Template: StoryFn = (args: InputStoryArgs) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Enter text...',
}

export const Disabled = Template.bind({})
Disabled.args = {
  placeholder: 'Disabled input...',
  disabled: true,
}
