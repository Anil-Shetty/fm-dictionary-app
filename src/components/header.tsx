import { ThemeSwitch } from "@/components/theme-switch";
import Link from "next/link";
import { FontSelector } from "@/components/font-selector";

export function Header() {
  return (
    <header className="flex justify-between items-center mb-8">
      <Link href='/' className="text-gray-500 dark:text-primary hover:text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6 md:size-8 lg:size-10"
          viewBox="0 0 34 38"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.5"
          >
            <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28"></path>
            <path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8"></path>
            <path d="M11 9h12"></path>
          </g>
        </svg>
      </Link>
      <div className="flex items-center gap-4 md:gap-5 lg:gap-6">
        <FontSelector />
        <div className="w-px h-4 lg:h-6 bg-gray-500 dark:bg-primary" />
        <ThemeSwitch />
      </div>
    </header>
  )
}