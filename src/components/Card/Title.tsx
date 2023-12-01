import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base = 'text-lg font-medium leading-normal' as ClassNameValue

export type TitleProps = ComponentProps<'h3'>

export function Title({ className, ...props }: TitleProps) {
  return <h3 className={twMerge(base, className)} {...props} />
}
