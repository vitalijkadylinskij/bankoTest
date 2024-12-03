import { Meta, StoryFn } from '@storybook/react'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '../form'
import '../../../global.css'

export default {
  title: 'Components/Form',
  component: Form,
} as Meta

interface FormStoryArgs {
  className?: string
}

const Template: StoryFn = (args: FormStoryArgs) => {
  const form = useForm({
    defaultValues: {
      username: '',
      email: '',
    },
  })

  return (
    <Form {...form} {...args}>
      <form onSubmit={form.handleSubmit((data) => console.log(data))}>
        <FormField
          name="username"
          control={form.control}
          rules={{ required: 'Username is required' }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <input {...field} placeholder="Enter username" />
              </FormControl>
              <FormDescription>This is your username</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="email"
          control={form.control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Invalid email address',
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <input {...field} placeholder="Enter email" />
              </FormControl>
              <FormDescription>This is your email address</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="submit"
          className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
        >
          Submit
        </button>
      </form>
    </Form>
  )
}

export const Default = Template.bind({})
Default.args = {}
