'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Font, useFont } from "@/components/font-provider"

export function FontSelector() {
  const { currentFont, setCurrentFont } = useFont()

  const handleFontChange = (value: string) => {
    setCurrentFont(value as Font);
  };

  return (
    <Select defaultValue={currentFont} onValueChange={handleFontChange}>
      <SelectTrigger className="w-20 pr-0 lg:w-24 border-none font-bold md:text-lg lg:text-xl shadow-none">
        <SelectValue placeholder="Select font" />
      </SelectTrigger>
      <SelectContent className="font-bold" align="end">
        <SelectItem className="font-sans md:text-lg" value="sans">Sans</SelectItem>
        <SelectItem className="font-serif md:text-lg" value="serif">Serif</SelectItem>
        <SelectItem className="font-mono md:text-lg" value="mono">Mono</SelectItem>
      </SelectContent>
    </Select>
  )
}