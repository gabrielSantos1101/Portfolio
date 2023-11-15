'use client'
import { Status, handler } from '@/lib/online'
import { useEffect, useMemo, useState } from 'react'

const OnlineCard = () => {
  const [data, setData] = useState<Status | undefined>()

  useEffect(() => {
    const fetchData = async () => {
      const result = await handler()
      setData(result)
    }
    fetchData()
  }, [])

  const status = useMemo(() => {
    if (!data) return ['loading', 'bg-gray-400']
    switch (data) {
      case 'idle':
      case 'dnd':
        return ['online', 'bg-[#6DD2B7] dark:bg-[#35AC8C]']
      case 'online':
        return ['online', 'bg-[#6DD2B7] dark:bg-[#35AC8C]']
      case 'offline':
        return ['offline', 'bg-[#FFADC6] dark:bg-[#FF477E]']
    }
  }, [data])

  return (
    <div
      className={`relative flex aspect-square h-full w-full overflow-hidden rounded-3xl text-white shadow-sm `}
    >
      <div className="absolute inset-0 flex items-center justify-center text-base font-bold md:text-2xl xl:text-3xl">
        <div className="flex items-center gap-3">
          {/* Loading Dot Animation */}
          <span className="h-2 w-2 md:h-5 md:w-5">
            <span className="absolute h-2 w-2 rounded-full bg-white md:h-5 md:w-5" />
          </span>
          <p>{status[0]}</p>
        </div>
      </div>
    </div>
  )
}

export default OnlineCard
