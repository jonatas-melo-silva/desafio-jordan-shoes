import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import { LogoJordan } from '../components'

const base =
  'flex h-[400px] w-full flex-col items-center justify-center overflow-hidden bg-neutral-900/75 bg-imageMobile bg-cover bg-top text-white md:bg-imageTablet lg:bg-imageDesktop' as ClassNameValue
const dark = 'dark:text-gray-50' as ClassNameValue

export type BannerProps = ComponentProps<'section'>

export function Banner({ className, ...props }: BannerProps) {
  return (
    <section className={twMerge(base, dark, className)} {...props}>
      <div className="flex h-full w-full flex-col items-start justify-center gap-10 px-6 md:max-w-[1216px] xl:px-0">
        <div className="flex items-center justify-start gap-2">
          <LogoJordan />
          <span className="text-lg font-medium lg:text-2xl">JordanShoes</span>
        </div>

        <div className="flex flex-col items-start justify-start gap-5">
          <h2 className="text-2xl font-medium lg:text-3xl">
            A melhor loja de Jordan
          </h2>
          <p className="text-base font-normal leading-snug text-white md:text-lg md:leading-6 lg:text-2xl lg:leading-8">
            O tênis Jordan é fruto de uma velha e forte <br /> parceria entre a
            Nike e o jogador Michael Jordan.
          </p>
        </div>
      </div>
    </section>
  )
}
