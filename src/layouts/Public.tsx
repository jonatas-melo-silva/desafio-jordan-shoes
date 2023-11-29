import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import * as Templates from '../templates'

const base =
  'flex min-h-screen w-full flex-col items-center text-neutral-900 bg-white antialiased' as ClassNameValue

export type PublicProps = ComponentProps<'div'>

export function Public({ className, ...props }: PublicProps) {
  return (
    <div className={twMerge(base, className)} {...props}>
      <Templates.Header />

      <Templates.Banner />

      <main className="flex flex-col items-center justify-center gap-16 px-5 py-20 md:max-w-[1216px] xl:px-0">
        {props.children}
      </main>
    </div>
  )
}
