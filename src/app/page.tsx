import { GridDnd } from '@/components/gridDnd'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full  flex-col items-center  justify-between p-3 md:p-12 lg:p-16 2xl:p-24">
      <GridDnd />
    </main>
  )
}
