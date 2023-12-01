import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import { Card as C } from '../components'
import { Product } from '../types'
import { formatPrice } from '../utils'

const base = '' as ClassNameValue
const dark = '' as ClassNameValue

export type CardProps = ComponentProps<'a'> & {
  product: Product
}

export function Card({ product, className, ...props }: CardProps) {
  return (
    <C.Root className={twMerge(base, dark, className)} {...props}>
      <C.Prefix>
        <C.Image alt={product.name} src={product.image} />
      </C.Prefix>
      <C.Wrapper>
        <C.Name>{product.name}</C.Name>
        <C.Category>{product.category}</C.Category>
      </C.Wrapper>
      <C.Price>{formatPrice(product.price)}</C.Price>
    </C.Root>
  )
}
