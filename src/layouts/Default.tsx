import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import * as Templates from '../templates'

const base =
  'flex min-h-screen w-full flex-col items-center text-neutral-900 bg-white antialiased' as ClassNameValue
const dark = 'dark:bg-zinc-900 dark:text-gray-200' as ClassNameValue

export type PublicProps = ComponentProps<'div'>

export function Default({ className, ...props }: PublicProps) {
  return (
    <div className={twMerge(base, dark, className)} {...props}>
      <Templates.Header />

      <Templates.Banner />

      <main className="flex flex-col items-center justify-center gap-10 px-6 py-14 md:max-w-[1216px] lg:gap-16 lg:py-20 xl:px-0">
        {props.children}
      </main>
    </div>
  )
}
