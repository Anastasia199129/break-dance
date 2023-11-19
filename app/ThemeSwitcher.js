'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

import SwitcherTheme from '@/components/ThemeSwitcher/SwitcherTheme'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div>
      <SwitcherTheme theme={theme} setTheme={setTheme} />
    </div>
  )
}
