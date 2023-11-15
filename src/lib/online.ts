export type Status = 'idle' | 'dnd' | 'online' | 'offline'

export const handler = async () => {
  const response: Status = await fetch(`${process.env.NEXT_PUBLIC_DISCORD_API}`)
    .then((res) => res.json())
    .then((res) => {
      return res.data.discord_status
    })
  return response
}
