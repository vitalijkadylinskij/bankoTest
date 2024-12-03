import { Meta, StoryFn } from '@storybook/react'
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '../card'
import { Button } from '@/components/ui/button'
import '../../../global.css'

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    className: {
      control: 'text',
      description: 'CSS class for custom styling',
    },
  },
} as Meta

const Template: StoryFn = (args) => (
  <Card {...args}>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>
        This is a brief description of the card content.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p>This is the content of the card. You can place any elements here.</p>
    </CardContent>
    <CardFooter>
      <Button>Action</Button>
    </CardFooter>
  </Card>
)

export const Default = Template.bind({})
Default.args = {
  className: 'w-full max-w-sm',
}

export const WithCustomContent = Template.bind({})
WithCustomContent.args = {
  className: 'w-full max-w-md bg-blue-50',
  children: (
    <>
      <CardHeader>
        <CardTitle>Custom Card Title</CardTitle>
        <CardDescription>
          Custom description for this unique card.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          This card has custom content, including additional descriptions,
          images, or other HTML elements.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="secondary">Secondary Action</Button>
      </CardFooter>
    </>
  ),
}
