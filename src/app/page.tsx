import { Toggle } from '@/components/Toggle'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center  justify-between p-24">
      <section className="grid w-3/4 grid-cols-4 h-auto grid-rows-4 gap-4">
        <div className="col-span-2 flex items-center justify-center w-full rounded-xl bg-slate-300">
          1
        </div>
        <div className="col-start-3 aspect-square flex items-center justify-center rounded-xl bg-slate-500">
          <Toggle />
        </div>
        <div className="row-span-2 w-full flex items-center justify-center col-start-4 rounded-xl bg-red-500">
          3
        </div>
        <div className="row-start-2 aspect-square w-full rounded-xl bg-lime-300 flex justify-center items-center">
          4
        </div>
        <div className="row-start-2 aspect-square w-full flex items-center justify-center rounded-xl bg-cyan-400">
          5
        </div>
        <div className="row-span-2 row-start-2 rounded-xl flex items-center justify-center bg-purple-500">
          6
        </div>
        <div className="col-start-4 w-full rounded-xl flex items-center justify-center aspect-square row-start-3 bg-white">
          7
        </div>
        <div className="col-span-2 col-start-1 rounded-xl flex items-center justify-center row-start-3 bg-orange-400">
          8
        </div>
        <div className="col-span-2 row-start-4 rounded-xl flex items-center justify-center bg-teal-500">
          9
        </div>
        <div className="col-span-2 col-start-3 rounded-xl flex items-center justify-center row-start-4 bg-blue-600">
          10
        </div>
      </section>
    </main>
  )
}
