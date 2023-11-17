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
        return ['online', 'bg-[#6DD2B7] dark:bg-[#22b38c]']
      case 'online':
        return ['online', 'bg-[#6DD2B7] dark:bg-[#22b38c]']
      case 'offline':
        return ['offline', 'bg-[#f7769d] dark:bg-[#FF477E]']
    }
  }, [data])

  return (
    <div
      className={`relative flex aspect-square h-full w-full overflow-hidden  text-white shadow-sm ${status[1]}`}
    >
      <div className="absolute inset-0 flex items-center justify-center text-base font-bold md:text-2xl xl:text-3xl">
        <div className="flex items-center gap-3">
          {/* Loading Dot Animation */}
          <span className="h-2 w-2 md:h-5 md:w-5">
            <span className="absolute h-2 w-2 rounded-full bg-white md:h-5 md:w-5" />
            {status[0] === 'online' && (
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-white md:h-5 md:w-5" />
            )}
          </span>
          <p>{status[0]}</p>
        </div>
      </div>
    </div>
  )
}

export default OnlineCard
