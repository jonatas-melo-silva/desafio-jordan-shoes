import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base = 'text-base font-medium text-indigo-400' as ClassNameValue
const dark = 'dark:text-blue-400' as ClassNameValue

export type SlugProps = ComponentProps<'span'>

export function Slug({ className, ...props }: SlugProps) {
  return <span className={twMerge(base, dark, className)} {...props} />
}
