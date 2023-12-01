import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'flex-shrink max-h-36 w-64 object-cover transition-all duration-300 ease-in-out hover:scale-110' as ClassNameValue

export type ImageProps = ComponentProps<'img'>

export function Image({ alt, className, ...props }: ImageProps) {
  return <img alt={alt} className={twMerge(base, className)} {...props} />
}
