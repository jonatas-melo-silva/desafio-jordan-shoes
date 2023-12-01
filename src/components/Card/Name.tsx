import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base = 'text-lg font-medium leading-normal' as ClassNameValue

export type NameProps = ComponentProps<'h3'>

export function Name({ className, ...props }: NameProps) {
  return <h3 className={twMerge(base, className)} {...props} />
}
