import { ScrollArea, ScrollBar } from '../scroll-area'
import '../../../global.css'
import { StoryFn } from '@storybook/react'

export default {
  title: 'Components/ScrollArea',
  component: ScrollArea,
}

interface ScrollAreaStoryArgs {
  className?: string
}

const Template: StoryFn = (args: ScrollAreaStoryArgs) => (
  <ScrollArea {...args} style={{ width: 300, height: 200 }}>
    <div style={{ height: 600, padding: '10px' }}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Vivamus lacinia odio vitae vestibulum vestibulum.</p>
      <p>Cras vel libero in ligula ullamcorper malesuada ac non nulla.</p>
      <p>Etiam hendrerit dolor vitae purus aliquam, at accumsan velit.</p>
      <p>Donec euismod orci quis quam pulvinar, nec volutpat urna dictum.</p>
      <p>Phasellus ac libero non nunc ultricies pretium.</p>
      <p>Pellentesque et sapien ac nulla viverra sagittis.</p>
      <p>Suspendisse at orci ornare, tempor libero a, auctor metus.</p>
      <p>Aenean facilisis augue sed elit dictum varius.</p>
    </div>
    <ScrollBar />
  </ScrollArea>
)

export const Default = Template.bind({})
Default.args = {
  className: 'rounded-lg border border-gray-200',
}

export const HorizontalScroll = (args: ScrollAreaStoryArgs) => (
  <ScrollArea {...args} style={{ width: 500, height: 150 }}>
    <div style={{ width: 1000, padding: '10px' }}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Vivamus lacinia odio vitae vestibulum vestibulum.</p>
      <p>Cras vel libero in ligula ullamcorper malesuada ac non nulla.</p>
      <p>Etiam hendrerit dolor vitae purus aliquam, at accumsan velit.</p>
      <p>Donec euismod orci quis quam pulvinar, nec volutpat urna dictum.</p>
    </div>
    <ScrollBar orientation="horizontal" />
  </ScrollArea>
)

HorizontalScroll.args = {
  className: 'rounded-lg border border-gray-200',
}

export const VerticalScroll = Template.bind({})
VerticalScroll.args = {
  className: 'rounded-lg border border-gray-200',
  style: { height: '400px' },
}
