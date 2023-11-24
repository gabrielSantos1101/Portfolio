'use client'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export function WhiterMultline({ text }: { text: string }) {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [text],
      typeSpeed: 30,
    })
    return () => {
      typed.destroy()
    }
  }, [text])

  return <p ref={el}></p>
}
