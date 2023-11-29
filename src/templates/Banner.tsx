import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import { LogoJordan } from '../components'

const base =
  'flex h-[400px] w-full flex-col items-center justify-center overflow-hidden bg-neutral-900/75 bg-image-michael-jordan bg-cover bg-center' as ClassNameValue

export type BannerProps = ComponentProps<'div'>

export function Banner({ className, ...props }: BannerProps) {
  return (
    <div className={twMerge(base, className)} {...props}>
      <div className="flex h-full w-full flex-col items-start justify-center gap-10 px-5 md:max-w-[1216px] xl:px-0">
        <div className="flex items-center justify-start gap-2">
          <LogoJordan />
          <span className="text-2xl font-medium text-white">JordanShoes</span>
        </div>

        <div className="flex flex-col items-start justify-start gap-5">
          <h2 className="text-2xl font-medium text-white md:text-4xl">
            A melhor loja de Jordan
          </h2>
          <p className="text-xl font-normal leading-8 text-white md:text-2xl">
            O tênis Jordan é fruto de uma velha e forte <br /> parceria entre a
            Nike e o jogador Michael Jordan.
          </p>
        </div>
      </div>
    </div>
  )
}
