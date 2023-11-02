import { Toggle } from '@/components/Toggle'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center  justify-between p-12 md:p-12 lg:p-16 2xl:p-24">
      <section className="w-full 2xl:w-4/5 grid-areas-md-layout lg:grid-areas-lg-layout grid h-screen gap-4">
        <div className="grid-in-A flex items-center justify-center w-full rounded-xl bg-slate-300">
          1
        </div>
        <div className="grid-in-B flex items-center justify-center rounded-xl bg-slate-500">
          <Toggle />
        </div>
        <div className="grid-in-C flex items-center justify-center rounded-xl bg-red-500">
          3
        </div>
        <div className="grid-in-D rounded-xl bg-lime-300 flex justify-center items-center">
          4
        </div>
        <div className="grid-in-E flex items-center justify-center rounded-xl bg-cyan-400">
          5
        </div>
        <div className="grid-in-F rounded-xl flex items-center justify-center bg-purple-500">
          6
        </div>
        <div className="grid-in-G rounded-xl flex items-center justify-center row-start-3 bg-white">
          7
        </div>
        <div className="grid-in-H rounded-xl flex items-center justify-center row-start-3 bg-orange-400">
          8
        </div>
        <div className="grid-in-I rounded-xl flex items-center justify-center bg-teal-500">
          9
        </div>
        <div className="grid-in-J rounded-xl flex items-center justify-center row-start-4 bg-blue-600">
          10
        </div>
      </section>
    </main>
  )
}
