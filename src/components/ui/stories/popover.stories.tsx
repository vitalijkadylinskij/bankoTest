import { Popover, PopoverTrigger, PopoverContent } from '../popover'
import { Button } from '@/components/ui/button'
import { StoryFn } from '@storybook/react'
import '../../../global.css'

export default {
  title: 'Components/Popover',
  component: Popover,
}

interface PopoverStoryArgs {
  className?: string
  triggerText?: string
  contentText?: string
}

const Template: StoryFn = (args: PopoverStoryArgs) => (
  <Popover>
    <PopoverTrigger asChild>
      <Button>{args.triggerText}</Button>
    </PopoverTrigger>
    <PopoverContent {...args}>
      <p>{args.contentText}</p>
    </PopoverContent>
  </Popover>
)

export const Default = Template.bind({})
Default.args = {
  triggerText: 'Open Popover',
  contentText: 'This is the content of the popover.',
  className: '',
}

export const WithCustomAlignment = Template.bind({})
WithCustomAlignment.args = {
  triggerText: 'Open Popover',
  contentText: 'This popover is aligned to the start.',
  align: 'start',
}

export const WithSideOffset = Template.bind({})
WithSideOffset.args = {
  triggerText: 'Open Popover',
  contentText: 'This popover has a larger side offset.',
  sideOffset: 10,
}
