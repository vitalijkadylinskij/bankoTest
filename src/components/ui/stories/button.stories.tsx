import { Meta, StoryFn } from '@storybook/react'
import { Button } from '../button'
import '../../../global.css'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'default',
          'primary',
          'outline',
          'secondary',
          'icon',
          'ghost',
        ],
      },
      description: 'The variant of the button',
    },
    size: {
      control: {
        type: 'select',
        options: ['default', 'sm', 'lg', 'icon'],
      },
      description: 'The size of the button',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as a child component',
    },
    onClick: { action: 'clicked' },
  },
} as Meta

const Template: StoryFn = (args) => <Button {...args}>Button</Button>

export const Default = Template.bind({})
Default.args = {
  variant: 'default',
  size: 'default',
}

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  size: 'default',
}

export const Outline = Template.bind({})
Outline.args = {
  variant: 'outline',
  size: 'default',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  size: 'default',
}

export const Icon = Template.bind({})
Icon.args = {
  variant: 'icon',
  size: 'icon',
  children: <span>🔍</span>, // Example icon (could be any icon component)
}

export const Large = Template.bind({})
Large.args = {
  variant: 'primary',
  size: 'lg',
}

export const Small = Template.bind({})
Small.args = {
  variant: 'secondary',
  size: 'sm',
}
