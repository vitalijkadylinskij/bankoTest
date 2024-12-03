import { useState } from 'react'
import { StoryFn } from '@storybook/react'
import { Bar } from '../bar'
import '../../../global.css'

export default {
  title: 'Components/Bar',
  component: Bar,
}

const Template: StoryFn = (args) => {
  const [isCollapsed, setIsCollapsed] = useState(args.isCollapsed)

  const toggleCollapse = () => {
    setIsCollapsed((prev: boolean) => !prev)
  }

  return (
    <Bar isCollapsed={isCollapsed} toggleCollapse={toggleCollapse}>
      <div className="p-4">
        <h3>Sidebar Content</h3>
        <p>This is some content inside the sidebar.</p>
      </div>
    </Bar>
  )
}

export const Default = Template.bind({})
Default.args = {
  isCollapsed: false,
}

export const Collapsed = Template.bind({})
Collapsed.args = {
  isCollapsed: true,
}
