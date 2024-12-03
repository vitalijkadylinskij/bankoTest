import { Tabs, TabsList, TabsTrigger, TabsContent } from '../tabs'
import { StoryFn } from '@storybook/react'
import '../../../global.css'

export default {
  title: 'Components/Tabs',
  component: Tabs,
}

interface TabsStoryArgs {
  className?: string
}

const Template: StoryFn = (args: TabsStoryArgs) => (
  <Tabs defaultValue="tab1" {...args}>
    <TabsList>
      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      <TabsTrigger value="tab3">Tab 3</TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">
      <p>This is the content for Tab 1.</p>
    </TabsContent>
    <TabsContent value="tab2">
      <p>This is the content for Tab 2.</p>
    </TabsContent>
    <TabsContent value="tab3">
      <p>This is the content for Tab 3.</p>
    </TabsContent>
  </Tabs>
)

export const Default = Template.bind({})
Default.args = {}
