import OnlineCard from '@/components/OnlineCard'
import { Toggle } from '@/components/Toggle'
import { TypographieText } from '@/components/TypographieText'
import { Card } from '@/components/ui/card'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full  flex-col items-center  justify-between p-3 md:p-12 lg:p-16 2xl:p-24">
      <section className="grid h-screen w-fit max-w-[1370px] grid-cols-sm-layout grid-rows-sm-layout gap-2 transition-all grid-areas-sm-layout md:w-full md:grid-cols-md-layout md:grid-rows-md-layout md:gap-3 md:grid-areas-md-layout lg:grid-cols-lg-layout lg:grid-rows-lg-layout lg:gap-4 lg:grid-areas-lg-layout">
        <Card className="flex flex-col place-content-evenly bg-bunker-950 grid-in-A">
          <TypographieText
            htmlTag="h1"
            text="Olá, eu sou o Gabriel Santos"
            className="text-3xl text-slate-100"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
            voluptatum deleniti perspiciatis eveniet consectetur corporis,
            soluta ullam deserunt autem error hic recusandae optio laudantium
            exercitationem enim aspernatur quas inventore ipsa.
          </p>
        </Card>

        <Card className="flex items-center justify-center bg-slate-500 grid-in-B ">
          2
        </Card>

        <Card className="flex items-center justify-center rounded-xl bg-red-500 grid-in-C ">
          3
        </Card>

        <Card className="flex items-center justify-center rounded-xl bg-lime-300 grid-in-D ">
          <Toggle />
        </Card>

        <Card className="flex items-center justify-center rounded-xl p-0 grid-in-E ">
          <OnlineCard />
        </Card>

        <Card className="flex items-center justify-center rounded-xl bg-purple-500 grid-in-F ">
          6
        </Card>

        <Card className="flex items-center justify-center rounded-xl bg-white grid-in-G ">
          7
        </Card>

        <Card className="flex items-center justify-center rounded-xl bg-orange-400 grid-in-H ">
          8
        </Card>

        <Card className="flex items-center justify-center rounded-xl bg-teal-500 grid-in-I ">
          9
        </Card>

        <Card className="flex items-center justify-center rounded-xl bg-blue-600 grid-in-J ">
          10
        </Card>
      </section>
    </main>
  )
}
