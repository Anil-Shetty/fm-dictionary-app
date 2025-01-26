'use client'

import { cn } from '@/lib/utils';
import * as React from 'react'

export type Font = keyof typeof fonts

export const fonts = {
  sans: 'font-sans',
  serif: 'font-serif',
  mono: 'font-mono',
}

export const FontContext = React.createContext<{
  currentFont: Font;
  setCurrentFont: React.Dispatch<React.SetStateAction<Font>>;
}>({
  currentFont: 'sans',
  setCurrentFont: () => { }
})

export function useFont() {
  return React.useContext(FontContext)
}


export function FontProvider({ className, children, ...others }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
  const [currentFont, setCurrentFont] = React.useState<keyof typeof fonts>('sans')

  return (
    <FontContext.Provider value={{ currentFont, setCurrentFont }}>
      <div className={cn(fonts[currentFont], className)} {...others}>
        {children}
      </div>
    </FontContext.Provider>
  )
}


