import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'text-base font-medium leading-tight md:text-lg md:leading-normal' as ClassNameValue

export type NameProps = ComponentProps<'h3'>

export function Name({ className, ...props }: NameProps) {
  return <h3 className={twMerge(base, className)} {...props} />
}
