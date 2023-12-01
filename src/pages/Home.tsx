import * as Templates from '../templates'

export function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-6">
        <h2 className="text-center text-2xl font-semibold md:text-3xl">
          Os melhores em só lugar
        </h2>
        <p className="text-center text-xl font-normal md:text-2xl">
          A marca Jordan na JordanShoes é a escolha certa para os amantes de
          sneakers que buscam estilo e conforto.
        </p>
      </section>

      <section className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Templates.Card
          href="#"
          src="../../src/assets/air-jordan-1-high-zoom-cmft-tropical-twist-1-400.svg"
          alt="produto"
        />
        <Templates.Card
          href="#"
          src="../../src/assets/air-jordan-1-mid-bright-citrus-1-1000 1.svg"
          alt="produto"
        />
        <Templates.Card
          href="#"
          src="../../src/assets/air-jordan-1-mid-dutch-green-1-400.svg"
          alt="produto"
        />
        <Templates.Card
          href="#"
          src="../../src/assets/air-jordan-1-mid-grey-camo-1-1000 1.svg"
          alt="produto"
        />
        <Templates.Card
          href="#"
          src="../../src/assets/air-jordan-1-mid-light-smoke-grey-gs-1-1000.svg"
          alt="produto"
        />
        <Templates.Card
          href="#"
          src="../../src/assets/air-jordan-1-retro-high-court-purple-w-1-400.svg"
          alt="produto"
        />
      </section>
    </>
  )
}
