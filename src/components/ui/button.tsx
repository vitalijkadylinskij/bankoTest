import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: '',
        primary: 'bg-blue-900 text-white hover:bg-blue-700 hover:text-blue-900',
        outline: 'border border-grey-600 bg-white',
        secondary: 'bg-blue-700 text-blue-900 hover:bg-charts-20',
        icon: 'bg-white text-grey-900 shadow-sm shadow-grey-300 hover:bg-grey-400 hover:text-black-800',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        export: 'bg-transparent text-blue-900 hover:text-charts-60',
        table_header: 'font-bold text-black-900',
      },
      size: {
        default: 'h-9 px-3',
        sm: 'h-4 w-4',
        lg: 'h-10 rounded-lg px-8',
        icon: 'h-7.5 w-7.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
