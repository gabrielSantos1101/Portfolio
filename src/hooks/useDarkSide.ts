import { useEffect, useState } from 'react'

export default function useDarkMode() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'))
  // eslint-disable-next-line no-unneeded-ternary
  const colorTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(theme ? 'light' : 'dark')
    root.classList.add(theme ? 'dark' : 'light')

    localStorage.setItem('theme', theme ? 'dark' : 'light')
  }, [theme, setTheme])

  return [colorTheme, setTheme]
}
