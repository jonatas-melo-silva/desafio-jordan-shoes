import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base = 'flex h-16 w-full justify-center bg-sky-50' as ClassNameValue

export type HeaderProps = ComponentProps<'header'>

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header className={twMerge(base, className)} {...props}>
      <div className="flex w-full items-center justify-center px-5 md:max-w-[1216px] xl:px-0">
        <p className="text-center text-xl font-medium md:text-2xl">
          Frete grátis para todo o Brasil
        </p>
      </div>
    </header>
  )
}
