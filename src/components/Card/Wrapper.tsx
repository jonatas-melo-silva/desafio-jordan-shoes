import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base = 'flex flex-col items-start gap-1 md:gap-3' as ClassNameValue

export type WrapperProps = ComponentProps<'div'>

export function Wrapper({ className, ...props }: WrapperProps) {
  return <div className={twMerge(base, className)} {...props} />
}
