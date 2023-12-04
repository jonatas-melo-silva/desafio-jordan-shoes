import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'flex h-10 w-full justify-center bg-sky-50 md:h-11 lg:h-16' as ClassNameValue
const dark = 'dark:bg-zinc-800' as ClassNameValue

export type HeaderProps = ComponentProps<'header'>

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header className={twMerge(base, dark, className)} {...props}>
      <div className="flex w-full items-center justify-center px-6 md:max-w-[1216px] xl:px-0">
        <p className="text-center text-sm font-medium md:text-base lg:text-2xl">
          Frete grátis para todo o Brasil
        </p>
      </div>
    </header>
  )
}
