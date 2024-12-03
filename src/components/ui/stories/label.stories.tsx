import { Label } from '../label'
import type { Meta, StoryFn } from '@storybook/react'
import '../../../global.css'

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    className: { control: 'text' },
  },
} as Meta<typeof Label>

const Template: StoryFn = (args) => <Label {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Default Label',
}

export const CustomClass = Template.bind({})
CustomClass.args = {
  children: 'Label with custom class',
  className: 'text-red-500',
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Disabled Label',
  className: 'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
}
