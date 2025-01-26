'use client'

import dynamic from "next/dynamic"
import { useTheme } from "next-themes"
import { Moon } from "lucide-react"

const Switch = dynamic(() => import("@/components/ui/switch").then(module => module.Switch), { ssr: false, loading: () => <div className="w-9 h-5 rounded-full bg-slate-600 dark:bg-primary"></div> })

const THEME = {
  DARK: 'dark',
  LIGHT: 'light',
  SYSTEM: 'system'
}

export const ThemeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme()

  return (
    <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
      <Switch
        defaultChecked={theme === THEME.DARK || systemTheme === THEME.DARK}
        checked={theme === THEME.DARK || (theme === THEME.SYSTEM && systemTheme === THEME.DARK)}
        onCheckedChange={(checked) => setTheme(checked ? THEME.DARK : THEME.LIGHT)}
      />
      <Moon className="size-5 md:size-6 text-gray-500 dark:text-primary" />
    </div>
  )
}