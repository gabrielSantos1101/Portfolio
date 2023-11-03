import { Toggle } from '@/components/Toggle'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full  flex-col items-center  justify-between p-12 md:p-12 lg:p-16 2xl:p-24">
      <section className="grid h-screen w-fit max-w-[1370px] grid-cols-sm-layout grid-rows-sm-layout gap-4 grid-areas-sm-layout md:w-full md:grid-cols-md-layout md:grid-rows-md-layout md:grid-areas-md-layout lg:grid-cols-lg-layout lg:grid-rows-lg-layout lg:grid-areas-lg-layout">
        <div className="flex items-center justify-center rounded-xl bg-slate-300 grid-in-A ">
          1
        </div>
        <div className="flex items-center justify-center rounded-xl bg-slate-500 grid-in-B ">
          2
        </div>
        <div className="flex items-center justify-center rounded-xl bg-red-500 grid-in-C ">
          3
        </div>
        <div className="flex items-center justify-center rounded-xl bg-lime-300 grid-in-D ">
          <Toggle />
        </div>
        <div className="flex items-center justify-center rounded-xl bg-cyan-400 grid-in-E ">
          5
        </div>
        <div className="flex items-center justify-center rounded-xl bg-purple-500 grid-in-F ">
          6
        </div>
        <div className="flex items-center justify-center rounded-xl bg-white grid-in-G ">
          7
        </div>
        <div className="flex items-center justify-center rounded-xl bg-orange-400 grid-in-H ">
          8
        </div>
        <div className="flex items-center justify-center rounded-xl bg-teal-500 grid-in-I ">
          9
        </div>
        <div className="flex items-center justify-center rounded-xl bg-blue-600 grid-in-J ">
          10
        </div>
      </section>
    </main>
  )
}
