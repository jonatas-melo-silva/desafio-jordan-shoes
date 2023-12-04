import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base = 'text-xl font-medium' as ClassNameValue
const dark = 'dark:text-gray-50' as ClassNameValue

export type PriceProps = ComponentProps<'span'>

export function Price({ className, ...props }: PriceProps) {
  return <span className={twMerge(base, dark, className)} {...props} />
}
