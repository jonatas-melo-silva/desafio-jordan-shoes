import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'flex h-48  items-center justify-center rounded bg-sky-50' as ClassNameValue
const dark = 'dark:bg-zinc-800' as ClassNameValue

export type PrefixProps = ComponentProps<'div'>

export function Prefix({ className, ...props }: PrefixProps) {
  return <div className={twMerge(base, dark, className)} {...props} />
}
