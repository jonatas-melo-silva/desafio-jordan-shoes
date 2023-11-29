import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import { LogoJordan } from '../components'

const base =
  'flex min-h-screen w-full flex-col items-center text-neutral-900 bg-white antialiased' as ClassNameValue

export type PublicProps = ComponentProps<'div'>

export function Public({ className, ...props }: PublicProps) {
  return (
    <div className={twMerge(base, className)} {...props}>
      <header className="flex h-16 w-full justify-center bg-sky-50">
        <div className="flex w-full items-center justify-center px-5 md:max-w-[1216px] xl:px-0">
          <p className="text-center text-xl font-medium md:text-2xl">
            Frete grátis para todo o Brasil
          </p>
        </div>
      </header>

      <div className="flex h-[400px] w-full flex-col items-center justify-center overflow-hidden bg-neutral-900/75 bg-image-michael-jordan bg-cover bg-center">
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
              O tênis Jordan é fruto de uma velha e forte <br /> parceria entre
              a Nike e o jogador Michael Jordan.
            </p>
          </div>
        </div>
      </div>

      <main className="flex flex-col items-center justify-center gap-16 px-5 py-20 md:max-w-[1216px] xl:px-0">
        <section className="flex flex-col items-center justify-center gap-6">
          <h2 className="text-center text-2xl font-semibold md:text-3xl">
            Os melhores em só lugar
          </h2>
          <p className="text-center text-xl font-normal md:text-2xl">
            A marca Jordan na JordanShoes é a escolha certa para os amantes de
            sneakers que buscam estilo e conforto.
          </p>
        </section>

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-1 row-span-1 flex w-full flex-col gap-4 md:gap-6">
            <div className="flex h-48  items-center justify-center rounded bg-sky-50">
              <img
                className="flex-shrink object-cover"
                src="../../src/assets/air-jordan-1-high-zoom-cmft-tropical-twist-1-400.png"
                alt="produto"
              />
            </div>
            <div className="flex flex-col items-start gap-1 md:gap-3">
              <p className="text-lg font-medium leading-normal">
                Air Jordan 1 High Zoom CMFT Tropical Twist
              </p>
              <span className="text-base font-medium text-indigo-400">
                Tênis Air Jordan
              </span>
            </div>
            <span className="text-lg font-medium md:text-xl">R$ 1.049,00</span>
          </div>
          <div className="col-span-1 row-span-1 flex w-full flex-col gap-4 md:gap-6">
            <div className="flex h-48  items-center justify-center rounded bg-sky-50">
              <img
                className="flex-shrink object-cover"
                src="../../src/assets/air-jordan-1-high-zoom-cmft-tropical-twist-1-400.png"
                alt="produto"
              />
            </div>
            <div className="flex flex-col items-start gap-1 md:gap-3">
              <p className="text-lg font-medium leading-normal">
                Air Jordan 1 High Zoom CMFT Tropical Twist
              </p>
              <span className="text-base font-medium text-indigo-400">
                Tênis Air Jordan
              </span>
            </div>
            <span className="text-lg font-medium md:text-xl">R$ 1.049,00</span>
          </div>
          <div className="col-span-1 row-span-1 flex w-full flex-col gap-4 md:gap-6">
            <div className="flex h-48  items-center justify-center rounded bg-sky-50">
              <img
                className="flex-shrink object-cover"
                src="../../src/assets/air-jordan-1-high-zoom-cmft-tropical-twist-1-400.png"
                alt="produto"
              />
            </div>
            <div className="flex flex-col items-start gap-1 md:gap-3">
              <p className="text-lg font-medium leading-normal">
                Air Jordan 1 High Zoom CMFT Tropical Twist
              </p>
              <span className="text-base font-medium text-indigo-400">
                Tênis Air Jordan
              </span>
            </div>
            <span className="text-lg font-medium md:text-xl">R$ 1.049,00</span>
          </div>
          <div className="col-span-1 row-span-1 flex w-full flex-col gap-4 md:gap-6">
            <div className="flex h-48  items-center justify-center rounded bg-sky-50">
              <img
                className="flex-shrink object-cover"
                src="../../src/assets/air-jordan-1-high-zoom-cmft-tropical-twist-1-400.png"
                alt="produto"
              />
            </div>
            <div className="flex flex-col items-start gap-1 md:gap-3">
              <p className="text-lg font-medium leading-normal">
                Air Jordan 1 High Zoom CMFT Tropical Twist
              </p>
              <span className="text-base font-medium text-indigo-400">
                Tênis Air Jordan
              </span>
            </div>
            <span className="text-lg font-medium md:text-xl">R$ 1.049,00</span>
          </div>
          <div className="col-span-1 row-span-1 flex w-full flex-col gap-4 md:gap-6">
            <div className="flex h-48  items-center justify-center rounded bg-sky-50">
              <img
                className="flex-shrink object-cover"
                src="../../src/assets/air-jordan-1-high-zoom-cmft-tropical-twist-1-400.png"
                alt="produto"
              />
            </div>
            <div className="flex flex-col items-start gap-1 md:gap-3">
              <p className="text-lg font-medium leading-normal">
                Air Jordan 1 High Zoom CMFT Tropical Twist
              </p>
              <span className="text-base font-medium text-indigo-400">
                Tênis Air Jordan
              </span>
            </div>
            <span className="text-lg font-medium md:text-xl">R$ 1.049,00</span>
          </div>
          <div className="col-span-1 row-span-1 flex w-full flex-col gap-4 md:gap-6">
            <div className="flex h-48  items-center justify-center rounded bg-sky-50">
              <img
                className="flex-shrink object-cover"
                src="../../src/assets/air-jordan-1-high-zoom-cmft-tropical-twist-1-400.png"
                alt="produto"
              />
            </div>
            <div className="flex flex-col items-start gap-1 md:gap-3">
              <p className="text-lg font-medium leading-normal">
                Air Jordan 1 High Zoom CMFT Tropical Twist
              </p>
              <span className="text-base font-medium text-indigo-400">
                Tênis Air Jordan
              </span>
            </div>
            <span className="text-lg font-medium md:text-xl">R$ 1.049,00</span>
          </div>
        </div>
      </main>
    </div>
  )
}
