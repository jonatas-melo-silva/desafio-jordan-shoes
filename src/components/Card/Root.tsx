import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'col-span-1 row-span-1 flex w-full flex-col gap-4 rounded outline-none md:gap-6' as ClassNameValue
const dark =
  'dark:focus-within:ring-2 dark:focus-within:ring-indigo-400' as ClassNameValue

export type RootProps = ComponentProps<'a'>

export function Root({ className, ...props }: RootProps) {
  return (
    <a className={twMerge(base, dark, className)} {...props}>
      {props.children}
    </a>
  )
}
