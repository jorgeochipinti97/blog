'use client'

import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import { cn } from 'app/lib/utils'

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={cn('grid gap-2', className)}
    {...props}
  />
))
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      // Premium-ish pill toggle base styling. This is intentionally not the
      // default shadcn “circle radio” — because a language toggle is not a
      // form field, it’s navigation.
      'relative inline-flex h-8 min-w-10 items-center justify-center rounded-full px-3 text-[11px] font-medium tracking-[0.12em] uppercase',
      'transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
      'text-neutral-300 hover:text-white',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25',
      'data-[state=checked]:text-white',
      className
    )}
    {...props}
  />
))
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
