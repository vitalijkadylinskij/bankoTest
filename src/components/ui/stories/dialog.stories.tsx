import { Meta, StoryFn } from '@storybook/react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '../dialog'
import { Button } from '@/components/ui/button'
import '../../../global.css'

export default {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Manage the open state of the dialog',
    },
  },
} as Meta

const Template: StoryFn = (args) => (
  <Dialog {...args}>
    <DialogTrigger asChild>
      <Button>Open Dialog</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogDescription>
          This is a description for the dialog.
        </DialogDescription>
      </DialogHeader>
      <div>
        <p>
          Here is some more information about the dialog. You can include
          anything you'd like here, such as text, inputs, forms, etc.
        </p>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="secondary">Cancel</Button>
        </DialogClose>
        <Button variant="primary">Confirm</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
)

export const Default = Template.bind({})
Default.args = {}
