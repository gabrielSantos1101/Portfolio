'use client'
import { useEffect, useRef, useState } from 'react'

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomLetter() {
  return alphabet[rand(0, alphabet.length - 1)]
}

function getRandomWord(text: string) {
  let finalWord = ''
  for (let i = 0; i < text.length; i++) {
    finalWord += text[i] === ' ' ? ' ' : getRandomLetter()
  }
  return finalWord
}

type TypographieTextProps = {
  htmlTag: keyof JSX.IntrinsicElements
  text: string
  className?: string | undefined
}

export function TypographieText({
  htmlTag: Tag,
  className,
  text,
}: TypographieTextProps) {
  const [word, setWord] = useState(text)
  const countRef = useRef(0)
  const globalCountRef = useRef(0)
  const canChangeRef = useRef(false)

  useEffect(() => {
    const randomWord = getRandomWord(text)
    setWord(randomWord)
    const interv = setInterval(() => {
      let finalWord = ''
      for (let x = 0; x < text.length; x++) {
        if (x <= countRef.current && canChangeRef.current) {
          finalWord += text[x]
        } else {
          finalWord += getRandomLetter()
        }
      }
      setWord(finalWord)
      if (canChangeRef.current) {
        countRef.current++
      }
      if (globalCountRef.current >= 20) {
        canChangeRef.current = true
      }
      if (countRef.current >= text.length) {
        clearInterval(interv)
        countRef.current = 0
        canChangeRef.current = false
        globalCountRef.current = 0
      }
      globalCountRef.current++
    }, 50)
  }, [text])

  return (
    <>
      <Tag className={className}>{word}</Tag>
    </>
  )
}
