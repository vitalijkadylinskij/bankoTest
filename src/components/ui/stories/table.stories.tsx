import '../../../global.css'
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '../table'
import { StoryFn } from '@storybook/react'

export default {
  title: 'Components/Table',
  component: Table,
}

interface TableStoryArgs {
  className?: string
}

const Template: StoryFn = (args: TableStoryArgs) => (
  <Table {...args}>
    <TableCaption>This is a sample table.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Header 1</TableHead>
        <TableHead>Header 2</TableHead>
        <TableHead>Header 3</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>Row 1, Cell 1</TableCell>
        <TableCell>Row 1, Cell 2</TableCell>
        <TableCell>Row 1, Cell 3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Row 2, Cell 1</TableCell>
        <TableCell>Row 2, Cell 2</TableCell>
        <TableCell>Row 2, Cell 3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Row 3, Cell 1</TableCell>
        <TableCell>Row 3, Cell 2</TableCell>
        <TableCell>Row 3, Cell 3</TableCell>
      </TableRow>
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell colSpan={3}>Footer Content</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
)

export const Default = Template.bind({})
Default.args = {}
