import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import { Card as C } from '../components'

const base = '' as ClassNameValue
const dark = '' as ClassNameValue

export type CardProps = ComponentProps<'a'> & {
  alt?: string
  src?: string
}

export function Card({ alt, src, className, ...props }: CardProps) {
  return (
    <C.Root className={twMerge(base, dark, className)} {...props}>
      <C.Prefix>
        <C.Image alt={alt} src={src} />
      </C.Prefix>
      <C.Wrapper>
        <C.Title>Air Jordan 1 High Zoom CMFT Tropical Twist</C.Title>
        <C.Slug>Tênis Air Jordan</C.Slug>
      </C.Wrapper>
      <C.Price>R$ 1.049,00</C.Price>
    </C.Root>
  )
}
